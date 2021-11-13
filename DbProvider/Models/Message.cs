using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbProvider.Models
{
    public class Message
    {
        public int Id { get; set; }

        public string Body { get; set; }
        public DateTime ChatCreationDateTime { get; set; }

        public Chat Chat { get; set; }
        public User Sender { get; set; }
    }
}
