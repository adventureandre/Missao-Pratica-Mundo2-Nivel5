const Editora = require('../modelo/editora-shema');

const getEditoras = async ()=>{
    return Editora.find();
}

//INCLUIR
const incluir = async (editora) => {
    await  Editora.create(editora)

}

module.exports = {
    getEditoras,
    incluir
}