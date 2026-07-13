using Angular21.Api.Api;

var webApplicationOptions = new WebApplicationOptions
{
    Args = args,
    ApplicationName = typeof(Program).Assembly.FullName,
    ContentRootPath = Directory.GetCurrentDirectory(),
    WebRootPath = "wwwroot/browser"
};
var builder = WebApplication.CreateBuilder(webApplicationOptions);
builder.Host.UseDefaultServiceProvider(options =>
{
    options.ValidateScopes = true;
    options.ValidateOnBuild = true;
});

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}
// TEST TAGS
app.MapGet("/api/get-person-list", PersonEndpoints.GetAllPersons);
app.MapGet("/api/get-person/{id}", PersonEndpoints.GetPerson);
app.MapGet("/api/get-session-id", PersonEndpoints.GetSessionId);
app.MapPost("/api/find-persons", PersonEndpoints.FindPersons);

app.UseStaticFiles();
app.MapFallbackToFile("index.html");

app.Run();
