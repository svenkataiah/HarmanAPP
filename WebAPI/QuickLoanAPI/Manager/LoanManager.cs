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
using QuickLoanAPI.Repository;

namespace QuickLoanAPI.Data
{
    public class LoanManager
    {
        private readonly QuickLoanDbContext _quickLoanDbContext;
        private readonly IConfiguration _configuration;
        LoanRepository _loanRepository = null;
        public LoanManager(QuickLoanDbContext quickLoanDbContext, IConfiguration configuration)
        {
            _quickLoanDbContext = quickLoanDbContext;
            _configuration = configuration;
            _loanRepository = new LoanRepository(_quickLoanDbContext,_configuration);
        }
        public async Task<string> UploadFile(byte[] fileContent, string fileName, string contentType)
        {
            return await _loanRepository.UploadFile(fileContent, fileName, contentType);
        }
        public List<LoanOptions> GetLoanOptions()
        {
            return _loanRepository.GetLoanOptions();
        }
        public List<Document> GetRequiredDocuments()
        {
            return _loanRepository.GetRequiredDocuments();
        }
        public string CreateLoanRequest(LoanRequest loanRequest)
        {
            return _loanRepository.CreateLoanRequest(loanRequest);
        }
        public string UpdateLoanRequest(QuickHomeLoanAPI.Model.LoanApplication loanApplication, bool isSave)
        {
            return _loanRepository.UpdateLoanRequest(loanApplication, isSave);
        }
        public Model.DbEntity.LoanApplication GetLoanDetails(string loanRefId)
        {
            return _loanRepository.GetLoanDetails(loanRefId);
        }
        public string GetLatestLoanId(int userId)
        {
            return _loanRepository.GetLatestLoanId(userId);
        }
        public string GetNearestBranch(string longitude, string latitude, int userId)
        {
            return _loanRepository.GetNearestBranch(longitude, latitude, userId);
        }
        public List<Model.DbEntity.LoanApplication> GetLoanHistory(int userId, bool isLoanRequest)
        {
            return _loanRepository.GetLoanHistory(userId, isLoanRequest);
        }
    }

}
