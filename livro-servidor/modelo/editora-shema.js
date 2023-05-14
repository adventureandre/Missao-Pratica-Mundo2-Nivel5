const banco = require("./conexao");


const EditoraSchema = new banco.Schema({
    _id: banco.Schema.Types.ObjectId,
    nome: String,
    codEditora: Number,
})

// LivroSchema > collection livros
const Editora = banco.model("editoras", EditoraSchema);

module.exports = Editora;