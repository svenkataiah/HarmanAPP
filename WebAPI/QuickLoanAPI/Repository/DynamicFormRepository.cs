using Microsoft.EntityFrameworkCore;
using QuickLoanAPI.Model.DbEntity;
using QuickLoanAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Data
{
    public class DynamicFormRepository
    {
        private QuickLoanDbContext _context;

        public DynamicFormRepository(QuickLoanDbContext context)
        {
            _context = context;
        }
        public List<LibraryField> GetLibraryFields()
        {
            return _context.LibraryFields
                .Include(fld => fld.Attributes).ToList();
        }
        public bool SaveFormTemplete(FormTemplate formTemplate)
        {
            var formTemplateDb = _context.FormTemplates
                .Include(fm => fm.Sections).Where(ft => ft.Id == formTemplate.Id).FirstOrDefault();
            formTemplateDb.Sections.ForEach(sec =>
            {
                sec.Fields = _context.FormFields
                            .Include(ff => ff.Attributes)
                            .Where(ff => ff.FormSectionId == sec.Id).ToList();
            });
            if (formTemplateDb == null)
            {
                _context.FormTemplates.Add(formTemplate);
            }
            else
            {
                formTemplateDb.Sections = formTemplate.Sections;
            }
            _context.SaveChanges();
            return true;
        }
        public List<FormTemplate> GetFormTemplates(int userId, bool isActive, int? templateId)
        {
            if (templateId != null)
            {
                return GetFormTemplatesByIds(new List<int> { templateId.Value });
            }

            var userCountry = GetUserCountry(userId, isActive ? false : true);
            var userIds = (_context.BankerOfficers
                .Include(bo => bo.Branch)
                .Include(bo => bo.OnlineUser)
                .Where(bo => bo.Branch.Address.Country == userCountry))
                .Select(bo => bo.OnlineUser.Id).ToList();

            var formtemplateIds = _context.FormTemplates
             .Include(ft => ft.Sections)
             .Where(ft => userIds.Contains(ft.CreatedById)
                 && ft.IsActive == (isActive ? isActive : ft.IsActive))
                 .Select(ft => ft.Id).ToList();

            return GetFormTemplatesByIds(formtemplateIds);
        }
        public string GetUserCountry(int useId, bool isAdmin)
        {
            string userCountry = null;
            if (isAdmin)
            {
                var userAccount = _context.BankerOfficers
              .Include(bo => bo.Branch).ThenInclude(br => br.Address)
              .Include(bo => bo.OnlineUser)
              .Where(bo => bo.OnlineUser.Id == useId).FirstOrDefault(); //.Branch.Address.Country;
                if (userAccount != null)
                {
                    userCountry = userAccount.Branch.Address.Country;
                }
            }
            else
            {
                var userAccount = _context.Accounts
                 .Include(bo => bo.Branch).ThenInclude(br => br.Address)
                 .Include(bo => bo.OnlineUser)
                 .Where(bo => bo.OnlineUser.Id == useId).FirstOrDefault(); //.Branch.Address.Country;
                if (userAccount != null)
                {
                    var userAddress = userAccount.Addresses.Where(addrs => addrs.AddressType == "RESI").FirstOrDefault();
                    userCountry = userAddress.Country;
                }
            }
            return userCountry;
        }
        public List<FormTemplate> GetFormTemplatesByIds(List<int> ids)
        {
            var formtemplates = _context.FormTemplates
              .Include(ft => ft.Sections)
              .Where(ft => ids.Contains(ft.Id)).ToList();

            formtemplates.ForEach(fm =>
            {
                fm.Sections.ForEach(sec =>
                {
                    sec.Fields = _context.FormFields
                     .Include(ff => ff.Attributes)
                     .Where(ff => ff.FormSectionId == sec.Id).ToList();
                });
            });

            return formtemplates;
        }
    }
}
