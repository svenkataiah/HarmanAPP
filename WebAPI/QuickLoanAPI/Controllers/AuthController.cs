using Microsoft.AspNetCore.Mvc;
using QuickLoanAPI.Manager;
using QuickLoanAPI.Model;
using QuickLoanAPI.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickHomeLoanAPI.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        QuickLoanDbContext _context = null;
        public AuthController(QuickLoanDbContext context)
        {
            _context = context;
        }
        // AUTHENTICATE USER : GET api/auth/userid/password
        [HttpGet("{userId}/{password}")]
		public IActionResult Authenticate(string userId, string password)
        {
            var authMgr = new AuthManager(_context);
            return Ok(authMgr.AuthenticateUser(userId, password));
        }

        // PUT api/values/5
		[HttpPost("register")]
        public IActionResult Register([FromBody]RegisterationInfo registerationInfo)
        {
            var authMgr = new AuthManager(_context);
            var status = authMgr.RegisterForNotification(registerationInfo);

            return Ok(new
            {
                status
            });
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
