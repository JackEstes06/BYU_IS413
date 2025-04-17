using _413Final.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace _413Final.Controllers;

[Route("[controller]")]
[ApiController]
public class EntertainerController: ControllerBase
{
   private EntertainerDbContext _context;

   public EntertainerController(EntertainerDbContext context)
   {
      _context = context;
   }

   // CRUD for database
   // READ
   [HttpGet("AllEntertainers")]
   public IActionResult GetEntertainers()
   {
      var entertainers = _context.Entertainers.ToList();

      var engagementStats = _context.Engagements
         .AsEnumerable() // switch to LINQ-to-Objects so we can use DateTime.Parse
         .GroupBy(e => e.EntertainerId)
         .Select(g => new
         {
            EntertainerId = g.Key,
            TimesBooked = g.Count(),
            LastBookingDate = g
               .Select(e => DateTime.TryParse(e.StartDate, out var parsedDate) ? parsedDate : (DateTime?)null)
               .Where(d => d.HasValue)
               .Max()
         })
         .ToList();

      foreach (var ent in entertainers)
      {
         var stats = engagementStats.FirstOrDefault(s => s.EntertainerId == ent.EntertainerId);
         if (stats != null)
         {
            ent.TimesBooked = stats.TimesBooked;
            ent.LastBookingDate = stats.LastBookingDate;
         }
      }

      return Ok(entertainers);
   }
   [HttpGet("Entertainers/{entertainerId}")]
   public IActionResult GetEntertainer(int entertainerId)
   {
      var entertainer = _context.Entertainers.FirstOrDefault(e => e.EntertainerId == entertainerId);
      if (entertainer == null) return NotFound();
      return Ok(entertainer);
   }

   
   // CREATE
   [HttpPost("AddEntertainer")]
   public IActionResult AddProject([FromBody] Entertainer newEntertainer)
   {
      _context.Entertainers.Add(newEntertainer);
      _context.SaveChanges();
      return Ok(newEntertainer);
   }
   
   // UPDATE
   [HttpPut("UpdateEntertainer/{entertainerId}")]
   public IActionResult UpdateEntertainer(int entertainerId, [FromBody] Entertainer newEntertainer)
   {
      var existingEntertainer = _context.Entertainers.Find(entertainerId);

      if (existingEntertainer != null)
      {
         existingEntertainer.EntStageName = newEntertainer.EntStageName;
         existingEntertainer.EntSSN = newEntertainer.EntSSN;
         existingEntertainer.EntStreetAddress = newEntertainer.EntStreetAddress;
         existingEntertainer.EntCity = newEntertainer.EntCity;
         existingEntertainer.EntState = newEntertainer.EntState;
         existingEntertainer.EntZipCode = newEntertainer.EntZipCode;
         existingEntertainer.EntPhoneNumber = newEntertainer.EntPhoneNumber;
         existingEntertainer.EntWebPage = newEntertainer.EntWebPage;
         existingEntertainer.EntEMailAddress = newEntertainer.EntEMailAddress;
         existingEntertainer.DateEntered = newEntertainer.DateEntered;

         _context.Entertainers.Update(existingEntertainer);
      }

      _context.SaveChanges();
            
      return Ok(newEntertainer);
   }

   // DELETE
   [HttpDelete("DeleteEntertainer/{entertainerId}")]
   public IActionResult DeleteEntertainer(int entertainerId)
   {
      var existingEntertainer = _context.Entertainers.Find(entertainerId);
      if (existingEntertainer == null)
      {
         return NotFound(new {message = "Entertainer not found"});
      }

      _context.Entertainers.Remove(existingEntertainer);
      _context.SaveChanges();
      return NoContent();
   }
}