using DefaultNamespace;
using Microsoft.EntityFrameworkCore;

namespace WaterProject.API.Data;

public class WaterProjectDbContext: DbContext
{
    public WaterProjectDbContext(DbContextOptions<WaterProjectDbContext> options) : base(options)
    {
    }
    
    public DbSet<Project> Projects { get; set; }
}