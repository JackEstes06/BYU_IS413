var builder = WebApplication.CreateBuilder(args);
// Setup services (MVC services)
builder.Services.AddControllersWithViews();
var app = builder.Build();

// To serve static files do this
// app.UseDefaultFiles();
// Otherwise do this
// app.MapGet("/", () => "Hello World!");

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
    // pattern: "{controller=Home}/{action=FanMail}/{id?}"
);

app.Run();