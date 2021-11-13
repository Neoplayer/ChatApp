using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DbProvider.Models
{
    public class Chat
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public ChatType ChatType { get; set; }

        public DateTime Datetime { get; set; }


        [JsonIgnore]
        public virtual ICollection<User> Members { get; set; }
        [JsonIgnore]
        public virtual ICollection<Message> Messages { get; set; }
    }

    public enum ChatType
    {
        Dm,
        Group,
        Global
    }
}
