using System;
namespace QuickHomeLoanAPI.Model
{
    public class LoanBasicInfo
    {
        public LoanBasicInfo()
        {
        }
        public string LoanId
		{
			get;
			set;
		}
		public string AccountNumber {
            get;
            set;
        }
	    public string Name
		{
			get;
			set;
		}
        public string PropertyAddress
		{
			get;
			set;
		}
		public string[] RequiredDocuments
        {
            get;
            set;
        }
        public string Comments
		{
			get;
			set;
		}
	}
}
