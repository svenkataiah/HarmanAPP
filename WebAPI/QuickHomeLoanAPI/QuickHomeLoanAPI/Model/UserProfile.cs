using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace QuickHomeLoanAPI.Model
{
	public class UserProfile
	{
		public string Name
		{
			get;
			set;
		}
		public string AccountNUmber
		{
			get;
			set;
		}
		public string Branch
		{
			get;
			set;
		}
		public Credential Credential 
		{
			get;
			set;
		}
	}
}

