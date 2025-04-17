using System.ComponentModel.DataAnnotations;

namespace _413Final.Data;

public class Engagement
{
    [Key]
    public int EngagementNumber { get; set; }
    [Required]
    public string StartDate { get; set; }
    [Required]
    public string EndDate { get; set; }
    [Required]
    public string StartTime { get; set; }
    [Required]
    public string StopTime { get; set; }
    [Required]
    public int ContractPrice { get; set; }
    [Required]
    public int CustomerId { get; set; }
    [Required]
    public int AgentId { get; set; }
    [Required]
    public int EntertainerId { get; set; }
}