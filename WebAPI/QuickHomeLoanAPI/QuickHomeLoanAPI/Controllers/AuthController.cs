using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuickHomeLoanAPI.Data;
using QuickHomeLoanAPI.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickHomeLoanAPI.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
		[HttpGet("{userId}/{password}")]
		public UserInfo Get(string userId, string password)
        {
			var userProfileCollection = new UserProfileCollection();
			var result = userProfileCollection.UserProfile.Select(item => item).Where(item => item.Credential.UserId == userId && item.Credential.Password == password);
			if (result.Any()){
				var resultList = result.ToList();
				return new UserInfo
				{
					isAuthenticated = true,
					Name = resultList[0].Name,
					Branch = resultList[0].Branch,
					AccountNUmber = resultList[0].AccountNUmber
				};
			}
			return new UserInfo
			{
				isAuthenticated = false
			};
            
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
		[HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
