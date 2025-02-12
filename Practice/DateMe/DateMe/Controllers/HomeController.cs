using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DateMe.Models;

namespace DateMe.Controllers;

public class HomeController : Controller
{
    private DatingApplicationContext _context;
    
    public HomeController(DatingApplicationContext context)
    {
        _context = context;
    }

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
        _context.Applications.Add(response);
        _context.SaveChanges();
        
        return View("Confirmation", response);
    }
}