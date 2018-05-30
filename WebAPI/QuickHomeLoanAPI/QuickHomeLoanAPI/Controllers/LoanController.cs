using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using QuickHomeLoanAPI.Manager;
using QuickHomeLoanAPI.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickHomeLoanAPI.Controllers
{
    [Route("api/[controller]")]
    public class LoanController : Controller
	{
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
					Notification = new Model.Notification{
						Title = "Easy Home Loan",
						Message = "We have received your loan application and sent for processing. Click here to view the eligibility details. Reference ID : APXJ78658795RT"
					}
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
                    Notification = new Model.Notification{
                        Title = "Easy Home Loan",
						Message = "We have received your loan application and sent for processing. Click here to view the eligibility details. Reference ID : APXJ78658795RQ"
                    }
                }
			};
			return loans;
		}
        // GET api/loan/5
        [HttpGet("{loanId}")]
		public LoanApplication Get(string loanId)
        {
			var loan = new LoanApplication();
			loan.LoanBasicInfo = new LoanBasicInfo
			{
				AccountNumber = "XXXXXXX987098",
				LoanId = "APXJ78658795RT",
				Name = "CORRY H DOCHO",
				PropertyAddress = "602 Glendale Street Oak Lawn, IL 60453",
				RequiredDocuments = new string[]{
					"Passport",
					"State Driving License",
					"Military ID Card"
				},
				Comments = "You are Eligible for the loan."
			};
			loan.LoanOptions = new List<LoanOptions>{
					new LoanOptions {
						Tenure = "5 Years",
						LoanAmount = 87678557,
						EMIAmount = 98789,
						InterestRate = "11.23",
					LoanSchedule = new List<LoanSchedule>(){
						new LoanSchedule{
							TenureYear = "1 Yr",
                            PrincipalPaid = 432535,
                            InterestPaid = 23432,
                            Balance = 4555366
						},
						new LoanSchedule{
                            TenureYear = "2 Yr",
                            PrincipalPaid = 432535,
                            InterestPaid = 23432,
                            Balance = 4555366
                        },
						new LoanSchedule{
                            TenureYear = "3 Yr",
                            PrincipalPaid = 832535,
                            InterestPaid = 23432,
                            Balance = 655366
                        },
						new LoanSchedule{
                            TenureYear = "4 Yr",
                            PrincipalPaid = 88932535,
                            InterestPaid = 23432,
                            Balance = 55366
                        },
						new LoanSchedule{
                            TenureYear = "5 Yr",
							PrincipalPaid = 889378935,
                            InterestPaid = 23432,
                            Balance = 0
                        }
					}
					},
					new LoanOptions{
						Tenure = "10 Years",
						LoanAmount = 87678557,
						EMIAmount = 9876,
						InterestRate = "10.23",
					LoanSchedule = new List<LoanSchedule>(){
						new LoanSchedule{
                            TenureYear = "1 Yr",
                            PrincipalPaid = 432535,
                            InterestPaid = 23432,
                            Balance = 4555366
                        },
                        new LoanSchedule{
                            TenureYear = "2 Yr",
                            PrincipalPaid = 432535,
                            InterestPaid = 23432,
                            Balance = 4555366
                        },
                        new LoanSchedule{
                            TenureYear = "3 Yr",
                            PrincipalPaid = 832535,
                            InterestPaid = 23432,
                            Balance = 655366
                        },
                        new LoanSchedule{
                            TenureYear = "4 Yr",
                            PrincipalPaid = 88932535,
                            InterestPaid = 23432,
                            Balance = 55366
                        },
                        new LoanSchedule{
                            TenureYear = "5 Yr",
                            PrincipalPaid = 889378935,
                            InterestPaid = 23432,
                            Balance = 0
                        }
					}
					},
					new LoanOptions{
						Tenure = "12 Years",
						LoanAmount = 87678557,
						EMIAmount = 6098,
						InterestRate = "09.23",
					LoanSchedule = new List<LoanSchedule>(){
						new LoanSchedule{
                            TenureYear = "1 Yr",
                            PrincipalPaid = 432535,
                            InterestPaid = 23432,
                            Balance = 4555366
                        },
                        new LoanSchedule{
                            TenureYear = "2 Yr",
                            PrincipalPaid = 432535,
                            InterestPaid = 23432,
                            Balance = 4555366
                        },
                        new LoanSchedule{
                            TenureYear = "3 Yr",
                            PrincipalPaid = 832535,
                            InterestPaid = 23432,
                            Balance = 655366
                        },
                        new LoanSchedule{
                            TenureYear = "4 Yr",
                            PrincipalPaid = 88932535,
                            InterestPaid = 23432,
                            Balance = 55366
                        },
                        new LoanSchedule{
                            TenureYear = "5 Yr",
                            PrincipalPaid = 889378935,
                            InterestPaid = 23432,
                            Balance = 0
                        }
					}
					}
			};
            return loan;
        }

        // POST api/loan
        [HttpPost]
        public string Post([FromBody]string registrationId)
        {
			var referenceId = "APXJ78658795RT";
			var message = "We have received your loan application and sent for processing. Click here to view the eligibility details. Reference ID : "+ referenceId;
			var notification = new NotificationManager();
			notification.SendNotificationFromFirebaseCloud(registrationId, message);
			return referenceId;
        }
    }
}
