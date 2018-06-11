using System;
using System.Collections.Generic;

namespace QuickLoanAPI.Model.DbEntity
{
	public class LoanOptions
    {
		public LoanOptions()
        {
		}
        public int Id { get; set; }
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
        public bool IsSelected { get; set; }
        public List<LoanSchedule> LoanSchedule
		{
			get;
			set;
		}
	}
}
