namespace QuickHomeLoanAPI.Model
{
    public class UserInfo
	{

        public int UserId { get; set; }
        public string FirstName
		{
			get;
			set;
		}
        public string LastName
        {
            get;
            set;
        }
        public string AccountNumber
		{
			get;
			set;
		}
		public string Branch
		{
			get;
			set;
		}
		public bool isAuthenticated{
			get;
			set;
		}
        
	}
}

