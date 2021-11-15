﻿using System.ComponentModel.DataAnnotations;

namespace ChatApp.Models.User
{
    public class RegisterRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}