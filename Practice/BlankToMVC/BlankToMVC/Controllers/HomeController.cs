using Microsoft.AspNetCore.Mvc;

namespace BlankToMVC.Controllers;

public class HomeController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult FanMail()
    {
        // Write code to determine what happens here
        return View();
    }
}