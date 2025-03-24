using System.ComponentModel.DataAnnotations;

namespace DefaultNamespace;

public class Project
{
    [Key]
    public int ProjectId { get; set; }
    [Required]
    public string ProjectName { get; set; }
    [Required]
    public string ProjectType { get; set; }
    [Required]
    public string ProjectRegionalProgram { get; set; }
    [Required]
    public int ProjectImpact { get; set; }
    [Required]
    public string ProjectPhase { get; set; }
    
    public string? ProjectFunctionalityStatus { get; set; }
}