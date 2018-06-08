
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuickLoanAPI.Model;
using QuickLoanAPI.Model.DbEntity;

namespace QuickLoanAPI.Data
{

    public static class DbInitializer
    {
        public static void Initialize(QuickLoanDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any users.
            if (context.Users.Any())
            {
                return;   // DB has been seeded
            }
            var accounts = new Account[]
            {
            new Account{
            FirstName = "CORRY",
            LastName = "DOCHO",
            Number ="8976890760",
            Addresses = new List<Address> {
            new Address {
                AddressType = "PERM",
                StreetAddress ="",
                City ="",
                State ="",
                Country ="",
                ZipCode =""
            },
            new Address {
                AddressType = "RESI",
                StreetAddress ="",
                City ="",
                State ="",
                Country ="",
                ZipCode =""
            }
            },
            Branch ="BR0001",
            OnlineUser = new User{
                UserId = "corry",
                Password = "corry",
                UserType = 3
            } }
            };

            foreach (Account account in accounts)
            {
                context.Accounts.Add(account);
            }
            context.SaveChanges();

            var users = new User[]
          {
              new User
              {
                  UserId = "marisa",
                  UserType = 1,
                  Password = "marisa",
              }
          };
            foreach (User user in users)
            {
                context.Users.Add(user);
            }
            context.SaveChanges();
        }
    }
}
