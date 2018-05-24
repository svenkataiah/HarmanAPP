using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuickHomeLoanAPI.Manager;
using QuickHomeLoanAPI.Model;

namespace QuickHomeLoanAPI.Controllers
{
    [Route("api/[controller]")]
    public class PropertyController : Controller
    {
        // GET api/values
        [HttpGet]
		public  PropertyDetail Get()
        {
			 

			return new PropertyDetail()
			{
				OwnerInfo = new OwnerInfo{
					Name = "DIXON BRIAN L / DIXON PAMELA T",
					CityAndState ="MISSION VIEJO CA",
					Phone = "6986986986",
					PostalCode = "92692",
					StreetAddress = "27911 ENCANTO"
				},
				APN = "AKJHU8656876",
				Characteristics = new Characteristics{
					NoOfStories = "2",
                    YearBuilt = "2006"
				},
				Dimensions = new Dimensions{
					LotAreaAcres = "0.1584",
					LotAreaSquareFeet ="6900",
					LotAreaDepth ="",
					LotAreaWidth =""
				},
				PropertyValues = new PropertyValues{
					AssessedValue = "97898",
					AssessedYear ="2017",
					ImprovmentValue ="456346",
					LandValue = "56546",
					MarketValue = "4573466",
					SaleValue = "3568235",
					TaxArea ="TX",
                    TotalTaxableValue = "879658"
				}
			};
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
