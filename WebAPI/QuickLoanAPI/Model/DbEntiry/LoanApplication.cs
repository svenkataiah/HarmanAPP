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
        public Address Address { get; set; }

        // Employement Details
        public string EmployerName { get; set; }
        public int MonthlySalary { get; set; }
        public int NoofYearsExp { get; set; }
        public string EmployerPhone { get; set; }

        // Verification Details
        public string PassportNo { get; set; }
        public string StateDLNo { get; set; }

        public List<Document> Documents
        {
            get;
            set;
        }
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
