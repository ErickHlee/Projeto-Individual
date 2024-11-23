var campeaoModel = require("../models/campeaoModel");

function cadastrar(req, res) {
    var championServer = req.body.championServer;
    var abatesServer = req.body.abatesServer;
    var mortesServer = req.body.mortesServer;

    if (descricao == undefined) {
        res.status(400).send("descricao está undefined!");
    } else if (idCampeao == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {
        campeaoModel.cadastrar(championServer, abatesServer, mortesServer)
            .then((resultado) => {
                res.status(201).json(resultado);
            }
            ).catch((erro) => {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar
}
