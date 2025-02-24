using Microsoft.EntityFrameworkCore;

namespace DateMe.Models;

public class DatingApplicationContext : DbContext
{
    public DatingApplicationContext(DbContextOptions<DatingApplicationContext> options) : base(options)
    {
    }
    
    public DbSet<Application> Applications { get; set; }
    public DbSet<Major> Majors { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Major>()
            .HasData(
                new Major {MajorID = 1, MajorName = "Human Development"},
                new Major {MajorID = 2, MajorName = "Computer Science"},
                new Major {MajorID = 3, MajorName = "Information Systems"},
                new Major {MajorID = 4, MajorName = "Elementary Education"},
                new Major {MajorID = 5, MajorName = "Other"}
            );
    }
    
}