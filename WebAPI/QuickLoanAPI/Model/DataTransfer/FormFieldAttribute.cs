using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Model.DataTransfer
{
    public class FormFieldAttribute
    {
        public int Id { get; set; }
        public int FormFieldId { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}
