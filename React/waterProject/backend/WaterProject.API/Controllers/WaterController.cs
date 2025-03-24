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
        public IEnumerable<Project> GetProjects()
        {
            var projectsList = _context.Projects.ToList();
            return projectsList;
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
