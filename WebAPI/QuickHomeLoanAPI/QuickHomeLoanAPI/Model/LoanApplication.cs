using System;
using System.Collections.Generic;

namespace QuickHomeLoanAPI.Model
{
    public class LoanApplication
    {
        public LoanApplication()
        {
        }
		public LoanBasicInfo LoanBasicInfo
		{
			get;
			set;
		}
		public List<LoanOptions> LoanOptions{
			get;
			set;
		}
    }
}
