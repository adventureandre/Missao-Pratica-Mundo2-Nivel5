const banco = require("mongoose");
const options = {useUnifiedTopology:true,useNewUrlParser:true}

banco
    .connect(
        "mongodb://desenv:Fortaleza@localhost:27017/?authMechanism=DEFAULT",
        options
    )
    .then(() => {
        console.log("Conectado ao MongoDB!");
    })
    .catch((err) => console.log(err));

module.exports = banco;