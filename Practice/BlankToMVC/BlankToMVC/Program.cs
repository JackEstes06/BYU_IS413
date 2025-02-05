var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// To serve static files do this
app.UseDefaultFiles();
app.UseStaticFiles();

// Otherwise do this
// app.MapGet("/", () => "Hello World!");

app.Run();