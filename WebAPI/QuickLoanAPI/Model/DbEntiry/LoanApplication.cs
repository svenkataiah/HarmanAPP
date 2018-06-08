using System.Collections.Generic;

namespace QuickLoanAPI.Model.DbEntity
{
    public class LoanApplication
    {
        public int Id { get; set; }
        public string ReferenceNo { get; set; }
        public Account Account
        {
            get;
            set;
        }
        public List<Document> Documents
        {
            get;
            set;
        }
        public Notification Notification { get; set; }
        public PropertyDetail Property { get; set; }
        public string Comments
        {
            get;
            set;
        }
        public List<LoanOptions> LoanOptions
        {
            get;
            set;
        }
        public string Status { get; set; }
    }
}
