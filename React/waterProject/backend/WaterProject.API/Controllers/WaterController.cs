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
        public IActionResult GetProjects(int cardsPerPage = 5, int pageNum = 1)
        {
            // Changes again
            var projectsList = _context.Projects
                .Skip((pageNum - 1) * cardsPerPage)
                .Take(cardsPerPage)
                .ToList();
            
            var numProjects = _context.Projects.Count();

            var projectData = new
            {
                Projects = projectsList,
                NumProjects = numProjects,
            };
            
            return Ok(projectData);
        }
        
        [HttpGet("FunctionalProjects")]
        public IEnumerable<Project> GetFunctionalProjects()
        {
            var projectsList = _context.Projects
                .Where(x => x.ProjectFunctionalityStatus == "Functional")
                .ToList();
            return projectsList;
        }
    }
}
