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
            var account = (_quickLoanDbContext.Accounts
                           .Include(item => item.OnlineUser))
                           .Where(item => item.OnlineUser.Id == loanRequest.UserId).FirstOrDefault();
            var propMgr = new PropertyManager();
            var loan = _quickLoanDbContext.LoanApplications.LastOrDefault();
            var refNumber = account.Branch + "HL";
            string sequenceNumber = "0000001";
            if (loan != null)
            {
                sequenceNumber = "0000000" + loan.Id.ToString();
            }
            refNumber += sequenceNumber.Substring(sequenceNumber.Length - 5);
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
        public string UpdateLoanRequest(QuickHomeLoanAPI.Model.LoanApplication loanApplication)
        {
            var loan = _quickLoanDbContext.LoanApplications
                .Include( l => l.Address)
                .Include( l => l.Property)
                .Include( l => l.Property.PropertyAddress)
                .Include( l => l.LoanOptions)
                .Include( l => l.Documents)
                .Include( l => l.Account)
                .Include( l => l.Account.OnlineUser)
                .Where(item => item.ReferenceNo == loanApplication.ReferenceId).FirstOrDefault();

            if(loanApplication.Address != null)
            {
                loan.Address = loanApplication.Address;
                loan.Address.AddressType = "LCA"; // loan communication address
            }

            if (loanApplication.PropertyAddress != null)
            {
                loan.Property.PropertyAddress.StreetAddress = loanApplication.PropertyAddress.StreetAddress;
                loan.Property.PropertyAddress.StreetAddress1 = loanApplication.PropertyAddress.StreetAddress1;
                loan.Property.PropertyAddress.City = loanApplication.PropertyAddress.City;
                loan.Property.PropertyAddress.State = loanApplication.PropertyAddress.State;
                loan.Property.PropertyAddress.ZipCode = loanApplication.PropertyAddress.ZipCode;
                loan.Property.APN = loanApplication.APN;
            }

            loan.EmployerName = loanApplication.EmployerName;
            loan.EmployerPhone = loanApplication.EmployerPhone;
            loan.MonthlySalary = loanApplication.MonthlySalary;
            loan.NoofYearsExp = loanApplication.NoofYearsExp;

            loan.PassportNo = loanApplication.PassportNo;
            loan.StateDLNo = loanApplication.StateDLNo;

            loan.Documents = loanApplication.Documents;

            var loanOption = loan.LoanOptions.Where(lo => lo.Id == loanApplication.SelectedLoanOption).FirstOrDefault();
            if (loanOption != null)
            {
                loanOption.IsSelected = true;
            }
            loan.Status = "AC";
            _quickLoanDbContext.SaveChanges();

            var message = "We have received your loan application and sent a notification to the Loan Officer.";
            var notification = new NotificationManager();
            notification.SendNotificationFromFirebaseCloud(loan.Account.OnlineUser.NotificationRegId, message);

            message = "A application has been received. Please review and take the necessary actions. RefId:" + loan.ReferenceNo;
            var receiver = _quickLoanDbContext.Users.Where(u => u.UserType == 1).FirstOrDefault();
            notification.SendNotificationFromFirebaseCloud(receiver.NotificationRegId, message);

            return loan.ReferenceNo;
        }
        public Model.DbEntity.LoanApplication GetLoanDetails(string loanRefId)
        {
            var loanRequest = (_quickLoanDbContext.LoanApplications
                .Where(loan => loan.ReferenceNo == loanRefId)
                .Include(loan => loan.LoanOptions)
                .Include(loan => loan.Property)
                .Include(loan => loan.Documents)
                .Include(loan => loan.Account)).FirstOrDefault();
            return loanRequest;
        }
        public List<Model.DbEntity.LoanApplication> GetLoanHistory(int userId, bool isLoanRequest )
        {
            var status = isLoanRequest ? "LU" : "AC";
            var loanRequest = (_quickLoanDbContext.LoanApplications
                .Include(loan => loan.Account)
                .Include(loan => loan.Account.OnlineUser)
                .Include( loan => loan.Property)
                .Include( loan => loan.Property.PropertyAddress))
                .Where(loan => loan.Account.OnlineUser.Id == userId && loan.Status == status).ToList();
            return loanRequest;
        }
    }

}
