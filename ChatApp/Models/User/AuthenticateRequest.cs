﻿using System.ComponentModel.DataAnnotations;

namespace ChatApp.Models.User
{
    public class AuthenticateRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
