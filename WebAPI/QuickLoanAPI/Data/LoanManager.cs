using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
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
            var loanRequest = (_quickLoanDbContext.LoanOptions
                .Where(lo => lo.LoanApplicationId == null))
                .Select(lo => new LoanOptions
                {   Id = lo.Id,
                    LoanAmount = lo.LoanAmount,
                    EMIAmount = lo.EMIAmount,
                    InterestRate = lo.InterestRate,
                    Tenure = lo.Tenure
                }).ToList();

            loanRequest.ForEach(lo =>
            {
                lo.LoanSchedule = (_quickLoanDbContext.LoanSchedules
                .Where(ls => ls.LoanOptionsId == lo.Id))
                .Select(ls => new LoanSchedule
                {
                    PrincipalPaid = ls.PrincipalPaid,
                    Balance = ls.Balance,
                    InterestPaid = ls.InterestPaid,
                    TenureYear = ls.TenureYear
                }).ToList();
            });

            loanRequest.ForEach(lo =>
            {
                lo.Id = 0;
            });
            return loanRequest;
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
                    }
                };
        }
        public string CreateLoanRequest(LoanRequest loanRequest)
        {
            var account = (_quickLoanDbContext.Accounts
                           .Include(item => item.OnlineUser)
                            .Include(item => item.Branch))
                           .Where(item => item.OnlineUser.Id == loanRequest.UserId).FirstOrDefault();
            var propMgr = new PropertyManager();
            var loan = _quickLoanDbContext.LoanApplications.LastOrDefault();
            var refNumber = account.Branch.BranchCode + "HL";
            string sequenceNumber = "0000001";
            if (loan != null)
            {
                sequenceNumber = "0000000" + loan.Id.ToString();
            }
            refNumber += sequenceNumber.Substring(sequenceNumber.Length - 5);
            var receiver = _quickLoanDbContext.Users.Where(u => u.UserType == 1).FirstOrDefault();
            var receiverBranch = _quickLoanDbContext.BankerOfficers
                .Include(bo => bo.Branch)
                .Include(bo => bo.OnlineUser)
                .Where(bo => bo.OnlineUser.Id == receiver.Id).FirstOrDefault();
            var loanApplication = new Model.DbEntity.LoanApplication
            {
                Account = account,
                LoanOptions = GetLoanOptions(),
                Property = propMgr.GetPropertyDetail(loanRequest.Address),
                ReferenceNo = refNumber,
                CreatedDate = DateTime.UtcNow,
                AssignedTo = receiver,
                AssignedBranch = receiverBranch.Branch.Name,
                Status = "LU",
                Comments= "Yor are eligible for the loan."
            };
            _quickLoanDbContext.LoanApplications.Add(loanApplication);
            _quickLoanDbContext.SaveChanges();

            var femSettings = _configuration.GetSection("fcmSettings");
            var serverKey = femSettings["userServerKey"];
            var senderId = femSettings["userSenderID"];
            var webUrl = femSettings["webAddress"];

            var message = "We have received your request for eligibility check. Click here to view the eligibility details. Reference ID : " + refNumber;
            var notification = new NotificationManager();
            notification.SendNotificationFromFirebaseCloud(webUrl, serverKey, senderId, account.OnlineUser.NotificationRegId, message);

            return refNumber;
        }
        public string UpdateLoanRequest(QuickHomeLoanAPI.Model.LoanApplication loanApplication, bool isSave)
        {
            var loan = _quickLoanDbContext.LoanApplications
                .Include(l => l.Address)
                .Include(l => l.Property)
                .Include(l => l.Property.PropertyAddress)
                .Include(l => l.LoanOptions)
                .Include(l => l.Documents)
                .Include(l => l.Account)
                .Include(l => l.AssignedTo)
                .Include(l => l.Account.OnlineUser)
                .Where(item => item.ReferenceNo == loanApplication.ReferenceNo).FirstOrDefault();

            if (loanApplication.Address != null)
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
            if (!isSave)
            {
                loan.Status = "AC";
            }
            _quickLoanDbContext.SaveChanges();

            var femSettings = _configuration.GetSection("fcmSettings");
            var serverKey = femSettings["bankerServerKey"];
            var senderId = femSettings["bankerSenderID"];
            var webUrl = femSettings["webAddress"];
            var message = "Loan Application has been initiated by "+ loan.Account.FirstName+" "+loan.Account.LastName+". RefId:" + loan.ReferenceNo;
            var notification = new NotificationManager();
            if (isSave)
            {
                notification.SendNotificationFromFirebaseCloud(webUrl, serverKey, senderId, loan.AssignedTo.NotificationRegId, message);
            }
            else
            {
                serverKey = femSettings["userServerKey"];
                senderId = femSettings["userSenderID"];
                message = "We have received your appraisal application and the mortgage expert has been notified.";
                notification.SendNotificationFromFirebaseCloud(webUrl, serverKey, senderId, loan.Account.OnlineUser.NotificationRegId, message);

                serverKey = femSettings["bankerServerKey"];
                senderId = femSettings["bankerSenderID"];
                message = "A new Appraisal application has been added to your queue. RefId:" + loan.ReferenceNo;
                notification.SendNotificationFromFirebaseCloud(webUrl, serverKey, senderId, loan.AssignedTo.NotificationRegId, message);
            }
            return loan.ReferenceNo;
        }
        public Model.DbEntity.LoanApplication GetLoanDetails(string loanRefId)
        {
            var loanRequest = (_quickLoanDbContext.LoanApplications
                .Include( loan => loan.Address)
                 .Include(loan => loan.LoanOptions)
                .Include(loan => loan.Property)
                .Include(loan => loan.Documents)
                .Include(loan => loan.Account)
                  .Include(loan => loan.Account.Branch)
                 .Include(loan => loan.Account.Addresses)
                 .Include(loan => loan.Property.PropertyAddress)
                 .Where(loan => loan.ReferenceNo == loanRefId)).FirstOrDefault();

            loanRequest.LoanOptions.ForEach(lo =>
           {
               lo.LoanSchedule = _quickLoanDbContext.LoanSchedules
               .Where(ls => ls.LoanOptionsId == lo.Id).ToList();
           });
            return loanRequest;
        }
        public string GetLatestLoanId(int userId)
        {
            var loanRequest = (_quickLoanDbContext.LoanApplications
                .Include(loan => loan.Account)
                 .Include(loan => loan.Account.OnlineUser)
                 .Where(loan => loan.Account.OnlineUser.Id == userId)).OrderByDescending(loan => loan.Id).FirstOrDefault();
            return loanRequest.ReferenceNo;
        }
        public string GetNearestBranch(string longitude, string latitude, int userId)
        {
            var loanRequest = (_quickLoanDbContext.LoanApplications
                .Include(loan => loan.Account)
                 .Include(loan => loan.Account.OnlineUser)
                 .Where(loan => loan.Account.OnlineUser.Id == userId)).OrderByDescending(loan => loan.Id).FirstOrDefault();
            return loanRequest.ReferenceNo;
        }
        public List<Model.DbEntity.LoanApplication> GetLoanHistory(int userId, bool isLoanRequest)
        {
            var status = isLoanRequest ? "LU" : "AC";
            var loanRequest = (_quickLoanDbContext.LoanApplications
                .Include(loan => loan.Account)
                .Include(loan => loan.Account.OnlineUser)
                .Include(loan => loan.Property)
                .Include(loan => loan.Property.PropertyAddress))
                .Include(loan => loan.AssignedTo)
                .Where(loan => loan.Account.OnlineUser.Id == userId && loan.Status == status).OrderByDescending(loan => loan.Id).ToList();
            return loanRequest;
        }
    }

}
