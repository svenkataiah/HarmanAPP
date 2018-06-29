using System.Linq;
using Microsoft.EntityFrameworkCore;
using QuickHomeLoanAPI.Model;
using QuickLoanAPI.Model;
using QuickLoanAPI.Repository;

namespace QuickLoanAPI.Manager
{
    public class AuthManager
    {
        AuthRepository _authRepository = null;
        public AuthManager(QuickLoanDbContext context)
        {
            _authRepository = new AuthRepository(context);
        }
        public UserInfo AuthenticateUser(string userId, string password)
        {
            return _authRepository.AuthenticateUser(userId, password);
        }
        public bool RegisterForNotification(RegisterationInfo registerationInfo)
        {
            return _authRepository.RegisterForNotification(registerationInfo);
        }
    }
}
