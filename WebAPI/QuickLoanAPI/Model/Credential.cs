using System;
namespace QuickHomeLoanAPI.Model
{
	public class Credential
    {
        public int Id { get; set; }
        public string UserId
        {
            get;
            set;
        }
        public string Password
        {
            get;
            set;
        }
    }
}
