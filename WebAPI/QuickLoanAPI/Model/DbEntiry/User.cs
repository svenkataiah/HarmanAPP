using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace QuickLoanAPI.Model.DbEntity
{
	public class User
	{
        public int Id { get; set; }
        public int UserType { get; set; }
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
        public string NotificationRegId { get; set; }
    }
}

