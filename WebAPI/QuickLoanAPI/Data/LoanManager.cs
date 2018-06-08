using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using QuickHomeLoanAPI.Manager;
using QuickHomeLoanAPI.Model;
using QuickLoanAPI.Model.DbEntity;

namespace QuickLoanAPI.Data
{
    public class LoanManager
    {
        private readonly QuickLoanDbContext _quickLoanDbContext;
        private readonly IConfiguration _configuration;

        public LoanManager(QuickLoanDbContext quickLoanDbContext, IConfiguration configuration)
        {
            _quickLoanDbContext = quickLoanDbContext;
            _configuration = configuration;
        }
        public async Task<string> UploadFile(byte[] fileContent, string fileName, string contentType)
        {
            var documentsPath = _configuration.GetSection("fileSettings")["documentsPath"];
            await File.WriteAllBytesAsync(documentsPath + fileName, fileContent);
            return documentsPath + fileName;
        }
        public List<LoanOptions> GetLoanOptions()
        {
            return new List<LoanOptions>{
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
        }
        public List<Document> GetRequiredDocuments()
        {
            return new List<Document>
                {
                    new Document
                    {
                        DocumentType = "Driving License",
                    },
                     new Document
                    {
                        DocumentType = "Passport",
                    },
                      new Document
                    {
                        DocumentType = "Payslip",
                    }
                };
        }
        public string CreateLoanRequest(LoanRequest loanRequest)
        {
            var account = _quickLoanDbContext.Accounts.Select(item => item).Where(item => item.OnlineUser.Id.ToString() == loanRequest.UserId).FirstOrDefault();
            var propMgr = new PropertyManager();
            var loan = _quickLoanDbContext.LoanApplications.LastOrDefault();
            var refNumber = account.Branch + "HL";
            if (loan != null)
            {
                var sequenceNumber = "0000000" + loan.Id.ToString();
                refNumber += sequenceNumber.Substring(sequenceNumber.Length - 5);
            }
            var loanApplication = new Model.DbEntity.LoanApplication
            {
                Account = account,
                LoanOptions = GetLoanOptions(),
                Property = propMgr.GetPropertyDetail(loanRequest.Address),
                ReferenceNo = refNumber,
                Status = "LU"
            };
            _quickLoanDbContext.LoanApplications.Add(loanApplication);
            _quickLoanDbContext.SaveChanges();

            var message = "We have received your loan request and sent for processing. Click here to view the eligibility details. Reference ID : " + refNumber;
            var notification = new NotificationManager();
            notification.SendNotificationFromFirebaseCloud(account.OnlineUser.NotificationRegId, message);

            return refNumber;
        }
        public string UpdateLoanRequest(string refId, LoanRequest loanRequest)
        {
            var loan = _quickLoanDbContext.LoanApplications.Select(item => item).Where(item => item.ReferenceNo == refId).FirstOrDefault();


            loan.Status = "AC";
            _quickLoanDbContext.SaveChanges();

            var message = "We have received your loan application and sent for processing. Click here to view the eligibility details. Reference ID : " + loan.ReferenceNo;
            var notification = new NotificationManager();
            notification.SendNotificationFromFirebaseCloud(loan.Account.OnlineUser.NotificationRegId, message);

            return loan.ReferenceNo;
        }
        public Model.DbEntity.LoanApplication GetLoanDetails(string loanRefId)
        {
            var loanRequest = (_quickLoanDbContext.LoanApplications
                .Where(loan => loan.ReferenceNo == loanRefId)
                .Include(loan => loan.LoanOptions)
                .Include(loan => loan.Property)
                .Include(loan => loan.Documents)).FirstOrDefault();
            return loanRequest;
        }
    }

}
