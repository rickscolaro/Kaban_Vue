using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class Produto
    {
        [Key]
        public int ProdutoId { get; set; }
        public string Descricao { get; set; }
       
    }
}