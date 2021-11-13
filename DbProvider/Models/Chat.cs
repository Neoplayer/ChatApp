using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbProvider.Models
{
    public class Chat
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public ChatType ChatType { get; set; }

        public DateTime Datetime { get; set; }

        public virtual ICollection<User> Members { get; set; }
        public virtual ICollection<Message> Messages { get; set; }
    }

    public enum ChatType
    {
        Dm,
        Group,
        Global
    }
}
