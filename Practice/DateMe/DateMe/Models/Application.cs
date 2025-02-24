using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DateMe.Models;

public class Application
{
    [Key]
    [Required]
    public int applicationId { get; set; }
    
    public string firstname { get; set; }
    
    public string lastname { get; set; }
    
    // [Range(0,130)]
    public int age { get; set; }
    
    public string phone { get; set; }
    
    [ForeignKey("MajorID")]
    public int majorID { get; set; }
    public Major major { get; set; }
    
    public string occupation { get; set; }
    
    public bool creeperStalkerStatus { get; set; }
}