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
    }
})

const Livro = banco.model("Livro", LivroSchema);

module.exports = Livro;