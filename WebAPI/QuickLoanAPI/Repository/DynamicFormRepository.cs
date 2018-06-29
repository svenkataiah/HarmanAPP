using QuickLoanAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Data
{
    public class DynamicFormRepository
    {
        private QuickLoanDbContext _context;

        public DynamicFormRepository(QuickLoanDbContext context)
        {
            _context = context;
        }

    }
}
