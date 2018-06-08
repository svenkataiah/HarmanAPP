using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

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

