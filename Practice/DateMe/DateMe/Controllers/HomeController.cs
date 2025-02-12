using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DateMe.Models;

namespace DateMe.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet]
    public IActionResult FillOutApplication()
    {
        return View("DatingApplication");
    }
    
    [HttpPost]
    public IActionResult FillOutApplication(Application response)
    {
        return View("Confirmation");
    }
}