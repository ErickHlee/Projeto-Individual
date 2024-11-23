var usuarioModel = require("../models/partidaModel");
var campeaoModel = require("../models/campeaoModel");
// var aquarioModel = require("../models/aquarioModel");

// function autenticar(req, res) {
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;

//     if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está indefinida!");
//     } else {

//         usuarioModel.autenticar(email, senha)
//             .then(
//                 function (resultadoAutenticar) {
//                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//                     if (resultadoAutenticar.length == 1) {
//                         console.log(resultadoAutenticar);

//                         // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].idUsuario)
//                         //     .then((resultadoAquarios) => {
//                         //         if (resultadoAquarios.length > 0) {
//                                     res.json({
//                                         idUsuario: resultadoAutenticar[0].idUsuario,
//                                         email: resultadoAutenticar[0].email,
//                                         senha: resultadoAutenticar[0].senha
//                                     });
//                         //         } else {
//                         //             res.status(204).json({ aquarios: [] });
//                         //         }
//                         //     })
//                     } else if (resultadoAutenticar.length == 0) {
//                         res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

async function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeCampeao = req.body.nomeCampeaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var abates = req.body.abatesServer;
    var mortes = req.body.mortesServer;
    var resultadoPartida = req.body.resultadoPartidaServer;

    // Faça as validações dos valores
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

module.exports = {
    cadastrar
}
