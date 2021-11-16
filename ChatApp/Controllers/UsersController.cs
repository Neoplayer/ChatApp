using ChatApp.Helpers;
using ChatApp.Models.User;
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


        [HttpPost("Register")]
        public IActionResult Register(RegisterRequest model)
        {
            var response = _userService.RegisterUser(model);

            if (response == false)
                return BadRequest(new { message = "Registration error" });

            return Ok(response);
        }

        [HttpPost("Authenticate")]
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
        [HttpGet("GetUser")]
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
