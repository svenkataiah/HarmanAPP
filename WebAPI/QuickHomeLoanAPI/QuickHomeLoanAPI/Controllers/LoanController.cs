using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using QuickHomeLoanAPI.Manager;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickHomeLoanAPI.Controllers
{
    [Route("api/[controller]")]
    public class LoanController : Controller
    {
		private  IConfigurationManager _configuration { get; set; }
		public LoanController(IConfigurationManager configuration ){
			_configuration = configuration;
		}
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
			var notification = new NotificationManager();
			//notification.SendNotificationFromFirebaseCloud();
			return new string[] { "value1", _configuration.GetConfigurationByKey() };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
