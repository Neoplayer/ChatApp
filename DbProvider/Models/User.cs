using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DbProvider.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Email { get; set; }
        public string Username { get; set; }
        [JsonIgnore]
        public string Password { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public int Ages { get; set; }

        public DateTime RegistrationDate { get; set; }


        public float AvgSentiment => Messages?.Average(x => x.Sentiment) ?? throw new Exception("Message Include Exception");
        

        [JsonIgnore]
        public virtual ICollection<Role> Roles { get; set; }
        [JsonIgnore]
        public virtual ICollection<Chat> Chats { get; set; }
        [JsonIgnore]
        public virtual ICollection<Message> Messages { get; set; }
    }
}
