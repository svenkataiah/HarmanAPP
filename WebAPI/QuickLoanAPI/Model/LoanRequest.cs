using System;
using QuickLoanAPI.Model.DbEntity;

namespace QuickHomeLoanAPI.Model
{
    public class LoanRequest
    {
        public LoanRequest()
        {
        }
        public string UserId
		{
			get;
			set;
		}
        public Address Address { get; set; }
    }
}
