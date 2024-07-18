using Microsoft.AspNetCore.Mvc;

namespace PFMS.Controllers
{
    public class PageController : Controller
    {
        public IActionResult Page()
        {
            return View();
        }
    }
}
