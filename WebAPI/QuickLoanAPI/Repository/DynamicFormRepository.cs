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
        public List<FormTemplate> GetFormTemplates(int useId)
        {
            string userCountry = null;
            var userAddress = _context.Accounts
                .Include(bo => bo.Branch).ThenInclude(br => br.Address)
                .Include(bo => bo.OnlineUser)
                .Where(bo => bo.OnlineUser.Id == useId).FirstOrDefault(); //.Branch.Address.Country;

            var userIds = _context.BankerOfficers
                .Include(bo => bo.Branch)
                .Include(bo => bo.OnlineUser)
                //.Select(bo => bo.OnlineUser.Id)
                .Where(bo => bo.Branch.Address.Country == ).ToList();

            var formtemplates = _context.FormTemplates
                .Include(ft => ft.Sections)
                .Where(ft => ft.CreatedBy

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
