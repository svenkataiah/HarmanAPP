using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Data
{
    public class DynamicFormManager
    {
        private QuickLoanDbContext _context;

        public DynamicFormManager(QuickLoanDbContext context)
        {
            _context = context;
        }

    }
}
