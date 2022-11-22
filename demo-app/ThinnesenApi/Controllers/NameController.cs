using Microsoft.AspNetCore.Mvc;

namespace ThinnesenApi.Controllers;

[Route("api/[controller]")]
public class NameController : ControllerBase
{
    [HttpPost("Add Name")]
    public IActionResult AddName([FromBody] string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            return BadRequest("you need to enter a name");

        return Ok("you have added the name " + name);
    } 
}