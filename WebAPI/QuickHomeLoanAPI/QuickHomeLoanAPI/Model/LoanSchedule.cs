using System;
namespace QuickHomeLoanAPI.Model
{
    public class LoanSchedule
    {
		public LoanSchedule()
        {
        }
		public string TenureYear
        {
            get;
            set;
        }
        public decimal PrincipalPaid
        {
            get;
            set;
        }
        public decimal InterestPaid
        {
            get;
            set;
        }
        public decimal Balance
        {
            get;
            set;
        }
    }
   
}
