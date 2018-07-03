using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickLoanAPI.Data;
using QuickLoanAPI.Model.DataTransfer;
using QuickLoanAPI.Repository;

namespace QuickLoanAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/DynamicForm")]
    public class DynamicFormController : Controller
    {
        QuickLoanDbContext _context = null;
        public DynamicFormController(QuickLoanDbContext context)
        {
            _context = context;
        }
        [HttpGet("fieldlibrary")]
        public IActionResult GetLibraryFields(string userId, string password)
        {
            var dynamicFormManager = new DynamicFormManager(_context);
            return Ok(dynamicFormManager.GetLibraryFields());
        }
        [HttpGet("templates/{userId}/{isActive}/{templateId}")]
        public IActionResult GetFormTemplates(int userId, bool isActive, int? templateId)
        {
            var dynamicFormManager = new DynamicFormManager(_context);
            return Ok(dynamicFormManager.GetFormTemplates(userId, isActive, templateId));
        }
        [HttpPost()]
        public IActionResult SaveFormTemplate([FromBody]FormTemplate formTemplate)
        {
            var dynamicFormManager = new DynamicFormManager(_context);
            return Ok(dynamicFormManager.SaveFormTemplate(formTemplate));
        }
    }
}