using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Model.DbEntity
{
    public class FormSection
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int FormTemplateId { get; set; }
        public List<FormField> Fields { get; set; }
    }
}
