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
        ViewBag.Majors = _context.Majors.ToList();
        return View("DatingApplication", new Application());
    }
    [HttpPost]
    public IActionResult FillOutApplication(Application response)
    {
        if (ModelState.IsValid)
        {
            _context.Applications.Add(response);
            _context.SaveChanges();
        
            return View("Confirmation", response);
        }
        else
        {
            ViewBag.Majors = _context.Majors.ToList();
            return View("DatingApplication", response);
        }
    }

    public IActionResult Waitlist()
    {
        // Linq
        var applications = _context.Applications
            .Where(x => x.creeperStalkerStatus == false)
            .OrderBy(x => x.lastname).ToList();
        
        return View(applications);
    }

    [HttpGet]
    public IActionResult Edit(int id)
    {
        Application recordToEdit = _context.Applications
            .Single(x => x.applicationId == id);
        // Application recordToEdit = _context.Applications
        //     .Where(x => x.applicationId == id);
            
        ViewBag.Majors = _context.Majors.ToList();
        return View("DatingApplication", recordToEdit);
    }
    [HttpPost]
    public IActionResult Edit(Application editedRecord)
    {
        _context.Update(editedRecord);
        _context.SaveChanges();

        return RedirectToAction("Waitlist");
    }

    [HttpGet]
    public IActionResult Delete(int id)
    {
        Application recordToDelete = _context.Applications
            .Single(x => x.applicationId == id);
        
        return View(recordToDelete);
    }
    [HttpPost]
    public IActionResult Delete(Application recordToDelete)
    {
        _context.Applications.Remove(recordToDelete);
        _context.SaveChanges();

        return RedirectToAction("Waitlist");
    }
}