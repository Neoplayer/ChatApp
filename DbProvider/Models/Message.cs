using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DbProvider.Models
{
    public class Message
    {
        public int Id { get; set; }

        public string SenderName => Sender.Username;
        public string Body { get; set; }
        public DateTime DateTime { get; set; }

        [JsonIgnore]
        public Chat Chat { get; set; }
        [JsonIgnore]
        public User Sender { get; set; }
    }
}
