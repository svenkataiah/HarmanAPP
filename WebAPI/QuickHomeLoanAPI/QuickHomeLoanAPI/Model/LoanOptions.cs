using System;
using System.Collections.Generic;

namespace QuickHomeLoanAPI.Model
{
	public class LoanOptions
    {
		public LoanOptions()
        {
		}
        public string Tenure
		{
			get;
			set;
		}
        public decimal LoanAmount
		{
			get;
			set;
		}
        public string InterestRate
		{
			get;
			set;
		}
        public decimal EMIAmount
		{
			get;
			set;

		}
		public List<LoanSchedule> LoanSchedule
		{
			get;
			set;
		}
	}
}
