using DefaultNamespace;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WaterProject.API.Data;

namespace WaterProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WaterController : ControllerBase
    {
        private WaterProjectDbContext _context;
        
        public WaterController(WaterProjectDbContext tempContext)
        {
            _context = tempContext;
        }

        [HttpGet("AllProjects")]
        public IActionResult GetProjects(int cardsPerPage = 5, int pageNum = 1,[FromQuery] List<string>? projectTypes = null)
        {
            var query = _context.Projects.AsQueryable();

            if (projectTypes != null && projectTypes.Any())
            {
                query = query.Where(p => projectTypes.Contains(p.ProjectType));
            }
            
            var numProjects = query.Count();

            var projectsList = query
                .Skip((pageNum - 1) * cardsPerPage)
                .Take(cardsPerPage)
                .ToList();
            
            var projectData = new
            {
                Projects = projectsList,
                NumProjects = numProjects,
            };
            
            return Ok(projectData);
        }

        [HttpGet("GetProjectTypes")]
        public IActionResult GetProjectsTypes()
        {
            var projectTypes = _context.Projects
                .Select(x => x.ProjectType)
                .Distinct()
                .ToList();
            
            return Ok(projectTypes);
        }

        // EXAMPLE OF OTHER ROUTE CALLS
        // --------------------------------------------
        // [HttpGet("FunctionalProjects")]
        // public IEnumerable<Project> GetFunctionalProjects()
        // {
        //     var projectsList = _context.Projects
        //         .Where(x => x.ProjectFunctionalityStatus == "Functional")
        //         .ToList();
        //     return projectsList;
        // }
        // --------------------------------------------
    }
}
