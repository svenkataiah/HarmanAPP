using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuickHomeLoanAPI.Manager;
using QuickHomeLoanAPI.Model;
using QuickLoanAPI.Data;
using QuickLoanAPI.Model.DbEntity;

namespace QuickHomeLoanAPI.Controllers
{
    [Route("api/[controller]")]
    public class PropertyController : Controller
    {
        // POST api/property/details
        [HttpPost("details")]
        public IActionResult Post([FromBody]Address address)
        {
            var propMgr = new PropertyManager();
            return Ok(propMgr.GetPropertyDetail(address));
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
