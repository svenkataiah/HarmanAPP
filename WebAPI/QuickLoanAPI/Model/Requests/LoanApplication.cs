using System;
using System.Collections.Generic;
using QuickLoanAPI.Model.DbEntity;

namespace QuickHomeLoanAPI.Model
{
    public class LoanApplication
    {
        public LoanApplication()
        {

        }
        public string ReferenceNo { get; set; }

        // Personal Information
        public string AccountNumber { get; set; }
        public string Branch{get;set;}
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Address Address { get; set; }
        public string SSN { get; set; }

        // Property infomration
        public string APN
        {
            get;
            set;
        }
        public Address PropertyAddress
        {
            get;
            set;
        }

        // Employement Details
        public string EmployerName { get; set; }
        public int MonthlySalary { get; set; }
        public int NoofYearsExp { get; set; }
        public string EmployerPhone { get; set; }

        // Verification Details
        public string PassportNo { get; set; }
        public string StateDLNo { get; set; }

        public List<Document> Documents { get; set; }

        public int SelectedLoanOption { get; set; }


    }
}

