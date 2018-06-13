using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuickHomeLoanAPI.Model;
using QuickLoanAPI.Model;

namespace QuickLoanAPI.Data
{
    public class AuthManager
    {
        QuickLoanDbContext _context = null;
        public AuthManager(QuickLoanDbContext context)
        {
            _context = context;
        }
        public UserInfo AuthenticateUser(string userId, string password)
        {
            var result = _context.Users.Select(item => item).Where(item => item.UserId == userId && item.Password == password);
            if (result.Any())
            {
                var resultList = result.ToList();
                if (resultList[0].UserType == 1)
                {
                    var banker = _context.BankerOfficers.Where(item => item.OnlineUser.Id == resultList[0].Id).FirstOrDefault();
                    if (banker != null)
                    {
                        return new UserInfo
                        {
                            isAuthenticated = true,
                            UserId = resultList[0].Id,
                            FirstName = banker.FirstName,
                            LastName = banker.LastName,
                            Branch = banker.Branch
                        };
                    }
                 }
                var account = _context.Accounts.Where(item => item.OnlineUser.Id == resultList[0].Id).FirstOrDefault();
                if (account != null)
                {
                    return new UserInfo
                    {
                        isAuthenticated = true,
                        UserId = account.OnlineUser.Id,
                        FirstName = account.FirstName,
                        LastName = account.LastName,
                        Branch = account.Branch,
                        AccountNumber = account.Number
                    };
                }

            }
            return new UserInfo
            {
                isAuthenticated = false
            };

        }
        public bool RegisterForNotification(RegisterationInfo registerationInfo)
        {
            try
            {
                var user = _context.Users.Select(item => item).Where(item => item.Id.ToString() == registerationInfo.UserId).FirstOrDefault();
                user.NotificationRegId = registerationInfo.RegistrationId;
                _context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
            
        }
    }
}
