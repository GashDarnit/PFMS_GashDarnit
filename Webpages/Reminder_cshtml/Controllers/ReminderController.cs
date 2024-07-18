using Microsoft.AspNetCore.Mvc;

namespace PFMS.Controllers
{
    public class ReminderController : Controller
    {
        public IActionResult Reminder()
        {
            return View();
        }
    }
}
