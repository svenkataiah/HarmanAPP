using QuickLoanAPI.Model.DataTransfer;
using QuickLoanAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Data
{
    public class DynamicFormManager
    {
        private DynamicFormRepository _dynamicFormRepository = null;
        public DynamicFormManager(QuickLoanDbContext context)
        {
            _dynamicFormRepository = new DynamicFormRepository(context);
        }
        public bool SaveFormTemplate(FormTemplate formTemplate)
        {
            var formTemplateDbEntity = AdaptToDBEntity(formTemplate);
            return _dynamicFormRepository.SaveFormTemplete(formTemplateDbEntity);
        }
        public List<FormTemplate> GetFormTemplates(int userId, bool isActive, int? templateId)
        {
            var formTemplateDbEntity = _dynamicFormRepository.GetFormTemplates(userId, isActive, templateId);
            return AdaptToDataTransferModels(formTemplateDbEntity);
        }
        public List<LibraryField> GetLibraryFields()
        {
            var libFields = _dynamicFormRepository.GetLibraryFields();
            return AdaptToDataTransferModels(libFields);
        }
        private Model.DbEntity.FormTemplate AdaptToDBEntity( FormTemplate formTemplate)
        {
            var formTemplateEntity = new Model.DbEntity.FormTemplate()
            {
                Id = formTemplate.Id,
                Name = formTemplate.Name,
                IsActive = formTemplate.IsActive,
                CreatedById = formTemplate.CreatedById,
                CreatedDate = formTemplate.CreatedDate,
                Version = formTemplate.Version
            };
            formTemplateEntity.Sections = AdaptToDBEntities(formTemplate.Sections);
            return formTemplateEntity;
        }
        private List<Model.DbEntity.FormSection> AdaptToDBEntities(List<FormSection> formSections)
        {
            var sections = new List<Model.DbEntity.FormSection>();
            formSections.ForEach(sec =>
            {
                sections.Add(AdaptToDBEntity(sec));
            });
            return sections;
        }
        private Model.DbEntity.FormSection AdaptToDBEntity(FormSection formSection)
        {
            var section = new Model.DbEntity.FormSection
            {
                Id = formSection.Id,
                Name = formSection.Name,
                FormTemplateId = formSection.FormTemplateId,
            };
            section.Fields = AdaptToDBEntities(formSection.Fields);
            return section;
        }
        private List<Model.DbEntity.FormField> AdaptToDBEntities(List<FormField> formFields)
        {
            var fields = new List<Model.DbEntity.FormField>();
            formFields.ForEach(ff =>
            {
                fields.Add(AdaptToDBEntity(ff));
            });
            return fields;
        }
        private Model.DbEntity.FormField AdaptToDBEntity(FormField formField)
        {
            var field = new Model.DbEntity.FormField
            {
                Id = formField.Id,
                Label = formField.Label,
                Type = formField.Type,
                FormSectionId = formField.FormSectionId
            };
            field.Attributes = AdaptToDBEntities(formField.Attributes);
            return field;
        }
        private List<Model.DbEntity.FormFieldAttribute> AdaptToDBEntities(List<FormFieldAttribute> formFieldAttributes)
        {
            var attributes = new List<Model.DbEntity.FormFieldAttribute>();
            formFieldAttributes.ForEach(fa =>
            {
                attributes.Add(AdaptToDBEntity(fa));
            });
            return attributes;
        }
        private Model.DbEntity.FormFieldAttribute AdaptToDBEntity(FormFieldAttribute formFieldAttribute)
        {
            return new Model.DbEntity.FormFieldAttribute
            {
                Id = formFieldAttribute.Id,
                Name = formFieldAttribute.Name,
                Value = formFieldAttribute.Value,
                FormFieldId = formFieldAttribute.FormFieldId
            };
        }

        private List<FormTemplate> AdaptToDataTransferModels(List<Model.DbEntity.FormTemplate> formTemplates)
        {
            var formTemplatesDataTransfer = new List<FormTemplate>();
            formTemplates.ForEach(formTemplate =>
            {
                formTemplatesDataTransfer.Add(AdaptToDataTransferModel(formTemplate));
            });
            return formTemplatesDataTransfer;
        }
        private FormTemplate AdaptToDataTransferModel(Model.DbEntity.FormTemplate formTemplate)
        {
            var formTemplateEntity = new FormTemplate()
            {
                Id = formTemplate.Id,
                Name = formTemplate.Name,
                IsActive = formTemplate.IsActive,
                CreatedById = formTemplate.CreatedById,
                CreatedDate = formTemplate.CreatedDate,
                Version = formTemplate.Version
            };
            formTemplateEntity.Sections = AdaptToDataTransferModels(formTemplate.Sections);
            return formTemplateEntity;
        }
        private List<FormSection> AdaptToDataTransferModels(List<Model.DbEntity.FormSection> formSections)
        {
            var sections = new List<FormSection>();
            formSections.ForEach(sec =>
            {
                sections.Add(AdaptToDataTransferModel(sec));
            });
            return sections;
        }
        private FormSection AdaptToDataTransferModel(Model.DbEntity.FormSection formSection)
        {
            var section = new FormSection
            {
                Id = formSection.Id,
                Name = formSection.Name,
                FormTemplateId = formSection.FormTemplateId,
            };
            section.Fields = AdaptToDataTransferModels(formSection.Fields);
            return section;
        }
        private List<FormField> AdaptToDataTransferModels(List<Model.DbEntity.FormField> formFields)
        {
            var fields = new List<FormField>();
            formFields.ForEach(ff =>
            {
                fields.Add(AdaptToDataTransferModel(ff));
            });
            return fields;
        }
        private FormField AdaptToDataTransferModel(Model.DbEntity.FormField formField)
        {
            var field = new FormField
            {
                Id = formField.Id,
                Label = formField.Label,
                Type = formField.Type,
                FormSectionId = formField.FormSectionId
            };
            field.Attributes = AdaptToDataTransferModels(formField.Attributes);
            return field;
        }
        private List<FormFieldAttribute> AdaptToDataTransferModels(List<Model.DbEntity.FormFieldAttribute> formFieldAttributes)
        {
            var attributes = new List<FormFieldAttribute>();
            formFieldAttributes.ForEach(fa =>
            {
                attributes.Add(AdaptToDataTransferModel(fa));
            });
            return attributes;
        }
        private FormFieldAttribute AdaptToDataTransferModel(Model.DbEntity.FormFieldAttribute formFieldAttribute)
        {
            return new FormFieldAttribute
            {
                Id = formFieldAttribute.Id,
                Name = formFieldAttribute.Name,
                Value = formFieldAttribute.Value,
                FormFieldId = formFieldAttribute.FormFieldId
            };
        }

        private List<LibraryField> AdaptToDataTransferModels(List<Model.DbEntity.LibraryField> formFields)
        {
            var fields = new List<LibraryField>();
            formFields.ForEach(ff =>
            {
                fields.Add(AdaptToDataTransferModel(ff));
            });
            return fields;
        }
        private LibraryField AdaptToDataTransferModel(Model.DbEntity.LibraryField formField)
        {
            var field = new LibraryField
            {
                Id = formField.Id,
                Label = formField.Label,
                Type = formField.Type,
            };
            field.Attributes = AdaptToDataTransferModels(formField.Attributes);
            return field;
        }
        private List<LibraryFieldAttribute> AdaptToDataTransferModels(List<Model.DbEntity.LibraryFieldAttribute> formFieldAttributes)
        {
            var attributes = new List<LibraryFieldAttribute>();
            formFieldAttributes.ForEach(fa =>
            {
                attributes.Add(AdaptToDataTransferModel(fa));
            });
            return attributes;
        }
        private LibraryFieldAttribute AdaptToDataTransferModel(Model.DbEntity.LibraryFieldAttribute formFieldAttribute)
        {
            return new LibraryFieldAttribute
            {
                Id = formFieldAttribute.Id,
                Name = formFieldAttribute.Name,
                Value = formFieldAttribute.Value,
            };
        }
    }
}
