using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _413Final.Data;

public class Entertainer
{
    [Key]
    public int EntertainerId { get; set; }
    [Required]
    public string EntStageName { get; set; }
    [Required]
    public string EntSSN { get; set; }
    [Required]
    public string EntStreetAddress { get; set; }
    [Required]
    public string EntCity { get; set; }
    [Required]
    public string EntState { get; set; }
    [Required]
    public string EntZipCode { get; set; }
    [Required]
    public string EntPhoneNumber { get; set; }

    public string? EntWebPage { get; set; }
    public string? EntEMailAddress { get; set; }
    
    [Required]
    public string DateEntered { get; set; }
    
    
    // Computed Properties - Not Stored in the DB
    [NotMapped]
    public int TimesBooked { get; set; }
    [NotMapped]
    public DateTime? LastBookingDate { get; set; }
    // END of Computed Properties
}