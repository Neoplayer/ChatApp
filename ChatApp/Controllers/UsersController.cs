using ChatApp.Helpers;
using ChatApp.Models;
using ChatApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }


        [HttpPost("register")]
        public IActionResult Register(RegisterRequest model)
        {
            var response = _userService.RegisterUser(model);

            if (response == false)
                return BadRequest(new { message = "Registration error" });

            return Ok(response);
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        //[Authorize]
        //[HttpGet]
        //public IActionResult GetAll()
        //{
        //    var users = _userService.GetAll();
        //    return Ok(users);
        //}

        [Authorize]
        [HttpGet("get_user")]
        public IActionResult GetUserData()
        {
            var user = HttpContext.Items["User"];

            if(user == null)
            {
                return(BadRequest("Auth error!"));
            }
            return Ok(user);
        }
    }
}
