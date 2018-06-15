using System;
using QuickLoanAPI.Model.DbEntity;

namespace QuickHomeLoanAPI.Model
{
    public class LoanRequest
    {
        public LoanRequest()
        {
        }
        public int UserId
		{
			get;
			set;
		}
        public Address Address { get; set; }
    }
}
