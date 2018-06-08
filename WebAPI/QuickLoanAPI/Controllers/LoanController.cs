using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using QuickHomeLoanAPI.Manager;
using QuickHomeLoanAPI.Model;
using QuickLoanAPI.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickHomeLoanAPI.Controllers
{
    [Route("api/[controller]")]
    public class LoanController : Controller
	{
        private readonly QuickLoanDbContext _context = null;
        private readonly IConfiguration _configuration;

        public LoanController(QuickLoanDbContext context,  IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        // GET api/loan/list/5
        [HttpGet("list/{accountNumber}")]
		public List<LoanApplication> GetLoanList(string accountNumber)
		{
			var loans = new List<LoanApplication>()
			{
				new LoanApplication{
					LoanBasicInfo = new LoanBasicInfo
			        {
				        AccountNumber = "XXXXXXX987098",
						LoanId = "APXJ78658795RT",
				        Name = "CORRY H DOCHO",
						PropertyAddress = "66 County Court Elgin, IL 60120",
				        Comments = "You are Eligible for the loan."
			         },
					//Notification = new Model.Notification{
					//	Title = "Easy Home Loan",
					//	Message = "We have received your loan application and sent for processing. Click here to view the eligibility details. Reference ID : APXJ78658795RT"
					//}
				},
				new LoanApplication{
                    LoanBasicInfo = new LoanBasicInfo
                    {
						AccountNumber = "XXXXXXX987098",
                        LoanId = "APXJ78658805RT",
						Name = "CORRY H DOCHO",
						PropertyAddress = "602 Glendale Street Oak Lawn, IL 60453",
                        Comments = "You are Eligible for the loan."
					},
      //              Notification = new Model.Notification{
      //                  Title = "Easy Home Loan",
						//Message = "We have received your loan application and sent for processing. Click here to view the eligibility details. Reference ID : APXJ78658795RQ"
      //              }
                }
			};
			return loans;
		}
        // GET api/loan/5
        [HttpGet("{loanId}/{isRequest}")]
        public IActionResult GetLoanDetails(string loanId, bool isRequest)
        {
            var loanMgr = new LoanManager(_context, _configuration);
            var loan = loanMgr.GetLoanDetails(loanId);
            if (isRequest == true)
            {
                loan.Documents = loanMgr.GetRequiredDocuments();
            }
            return Ok(loan);
        }
        // POST api/loan
        [HttpPost("update/{refId}")]
        public IActionResult UpdateLoanRequest(string refId, [FromBody]LoanRequest loanRequest)
        {
            var loanMgr = new LoanManager(_context, _configuration);
            return Ok(loanMgr.UpdateLoanRequest(refId, loanRequest));
        }
        // POST api/loan
        [HttpPost("create")]
		public IActionResult CreateLoanRequest([FromBody]LoanRequest loanRequest)
        {
            var loanMgr = new LoanManager(_context, _configuration);
            return Ok(loanMgr.CreateLoanRequest(loanRequest));
        }
        [HttpPost]
        [Route("uploadfile")]
        public async Task<string> Upload(IFormFile file)
        {
            var loanMgr = new LoanManager(_context, _configuration);
            if (file == null) throw new Exception("File is null");
            if (file.Length == 0) throw new Exception("File is empty");
            string filePath = null;
            using (Stream stream = file.OpenReadStream())
            {
                using (var binaryReader = new BinaryReader(stream))
                {
                    var fileContent = binaryReader.ReadBytes((int)file.Length);
                    filePath = await loanMgr.UploadFile(fileContent, file.FileName, file.ContentType);
                }
            }
            return filePath;
        }
    }
}
