using System;
namespace QuickLoanAPI.Model.DbEntity
{
    public class LoanSchedule
    {
		public LoanSchedule()
        {
        }
        public int Id { get; set; }
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
