using Microsoft.AspNetCore.Mvc;
using ThinnesenApi.Controllers;
using Xunit;

namespace ThinnesenApi.Tests.Controllers;

[Trait("Controllers", "NameController")]
public class NameControllerTests
{
    [Fact]
    public void NameController_AddName_ReturnsOk()
    {
        // Arrange
        var controller = new NameController();

        // Act
        var result = controller.AddName("hello");

        // Assert
        Assert.IsType<OkObjectResult>(result);
    }

    [Fact]
    public void NameController_AddName_ReturnsBadRequest()
    {
        var controller = new NameController();
        
        var result = controller.AddName(null);

        Assert.IsType<BadRequestObjectResult>(result);
    }
}