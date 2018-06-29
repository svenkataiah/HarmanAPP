using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Model.DbEntity
{
    public class Document
    {
        public int Id { get; set; }
        public string ReferenceNumber { get; set; }
        public string DocumentType { get; set; }
        public string Path { get; set; }
    }
}
