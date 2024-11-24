var partidaModel = require("../models/partidaModel");
var campeaoModel = require("../models/campeaoModel");

async function cadastrar(req, res) {
    var nomeCampeao = req.body.nomeCampeaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var abates = req.body.abatesServer;
    var mortes = req.body.mortesServer;
    var resultadoPartida = req.body.resultadoPartidaServer;
    var dataPartida = req.body.dataServer;

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
                    var id = data.length == 0 ? "Não existe" : data[0].idCampeao
                    return id;
                }
            )

        var idPartida = await partidaModel.buscarUltimaPartida(fkUsuario)
            .then(
                (data) => {
                    var id = data.length == 0 ? 1 : data[0].idPartida + 1
                    return id;
                }
            )

        console.log(idCampeao)
        if (idCampeao == "Não existe") {
            res.status(404).send("id Campeão não existe")
        } else {


            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            partidaModel.cadastrar(idCampeao, idPartida, fkUsuario, abates, mortes, resultadoPartida, dataPartida)
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

function buscarMedia(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    if (fkUsuario == undefined) {
        res.status(404).send("fkUsuario não existe")
    } else {
        partidaModel.buscarMedia(fkUsuario)
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

function buscar2UltimasPartidas(req, res) {
    console.log("Controller de boa")
    var usuarioFk = req.params.id;

    partidaModel.buscar2UltimasPartidas(usuarioFk).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar,
    buscarMedia,
    buscar2UltimasPartidas
}
