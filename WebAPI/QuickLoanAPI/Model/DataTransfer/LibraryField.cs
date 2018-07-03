using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Model.DataTransfer
{
    public class LibraryField
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Label { get; set; }
        public List<LibraryFieldAttribute> Attributes { get; set; }
    }
}
