const Livro = require('../modelo/livro-shema');

//OBTER LISTA
const obterLivros = async () => {
    return Livro.find()
}

//INCLUIR
const incluir = async (livro) => {
    await  Livro.create(livro)

}

//EXCLUIR
const excluir = async (codigo) => {
    await Livro.deleteOne({_id:codigo})
}

module.exports = {
    obterLivros,
    incluir,
    excluir
}