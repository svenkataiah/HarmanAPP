using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Model.DbEntity
{
    public class FormField
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Label { get; set; }
        public int FormSectionId { get; set; }
        public List<FormFieldAttribute> Attributes { get; set; }
    }
}
