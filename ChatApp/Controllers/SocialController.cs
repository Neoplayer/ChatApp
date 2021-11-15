using ChatApp.Helpers;
using ChatApp.Models.Social;
using ChatApp.Services;
using DbProvider.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ChatApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SocialController : ControllerBase
    {
        ISocialService socialService;

        public SocialController(ISocialService socialService)
        {
            this.socialService = socialService;
        }


        #region Chat

        [Authorize]
        [HttpPost("create_chat")]
        public IActionResult CreateChat(CreateChatRequest model)
        {
            var user = HttpContext.Items["User"] as User;

            var chat = socialService.CreateChat(user, model.Name, model.ChatType);

            return Ok(chat);
        }

        [Authorize]
        [HttpGet("get_chats")]
        public IActionResult GetChats(ChatType? chatType)
        {
            var user = HttpContext.Items["User"] as User;

            var chats = chatType == null ? socialService.GetChatsByUser(user) : socialService.GetChatsByUser(user, chatType.Value);

            return Ok(chats);
        }

        [Authorize]
        [HttpGet("remove_chat")]
        public IActionResult RemoveChat(int chatId)
        {
            var user = HttpContext.Items["User"];

            if (user == null)
            {
                return (BadRequest("Auth error!"));
            }
            return Ok(user);
        }

        #endregion

        #region Chat

        [Authorize]
        [HttpGet("get_chat_messages")]
        public IActionResult GetMessages(int chatId, int? depth)
        {
            return Ok(socialService.GetMessagesByChat(chatId, depth));
        }

        [Authorize]
        [HttpPost("send_message")]
        public IActionResult SendMessage(SendMessageRequest model)
        {
            var user = HttpContext.Items["User"] as User;

            return Ok(socialService.SendMessage(user, model.ChatId, model.Body));
        }

        #endregion
    }
}
