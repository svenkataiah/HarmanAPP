using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Model.DbEntity
{
    public class Account
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Branch
        {
            get;
            set;
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Address> Addresses { get; set; }
        public User OnlineUser { get; set; }
    }
}
