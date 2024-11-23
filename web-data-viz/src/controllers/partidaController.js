var usuarioModel = require("../models/partidaModel");
var campeaoModel = require("../models/campeaoModel");

async function cadastrar(req, res) {
    var nomeCampeao = req.body.nomeCampeaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var abates = req.body.abatesServer;
    var mortes = req.body.mortesServer;
    var resultadoPartida = req.body.resultadoPartidaServer;

    if (abates == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (resultadoPartida == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (mortes == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        var idCampeao = await campeaoModel.buscar(nomeCampeao)
            .then(
                (data) => {
                    console.log(data.length);
                    var id = data.length == 0 ? "Não existe" : data[0].idCampeao
                    return id;
                }
            )

        console.log(idCampeao)
        if (idCampeao == "Não existe") {
            res.status(404).send("id Campeão não existe")
        } else {


            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            usuarioModel.cadastrar(idCampeao, fkUsuario, abates, mortes, resultadoPartida)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }
}

async function exibir(req, res) {
    var nomeCampeao = req.body.nomeCampeaoServer;
    var abates = req.body.abatesServer;
    var mortes = req.body.mortesServer;
    var resultadoPartida = req.body.resultadoPartidaServer;

    var idCampeao = await campeaoModel.buscar(nomeCampeao)
        .then(
            (data) => {
                console.log(data.length);
                var id = data.length == 0 ? "Não existe" : data[0].idCampeao
                return id;
            }
        )

    console.log(idCampeao)
    if (idCampeao == "Não existe") {
        res.status(404).send("idCampeão não existe")
    } else {
        usuarioModel.exibir(abates, mortes, resultadoPartida)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    exibir
}
