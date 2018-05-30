using System;
using System.Collections.Generic;

namespace QuickHomeLoanAPI.Model
{
    public class LoanApplication
    {
        public LoanApplication()
        {
        }
        public Notification Notification
		{
			get;
			set;
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
