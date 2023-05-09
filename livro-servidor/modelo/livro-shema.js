const banco = require("./conexao");


const LivroSchema = new banco.Schema({
    _id:{
      type:  banco.Schema.Types.ObjectId
    },
    titulo:{
        type: String
    },
    codEditora:{
        type: Number
    },
    resumo:{
        type: String
    },
    autores:{
        type: [String]
    }
})

// LivroSchema > collection livros
const Livro = banco.model("livros", LivroSchema);

module.exports = Livro;