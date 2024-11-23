var database = require("../database/config");

function buscarCampeaoPorPartida(idCampeao) {

    var instrucaoSql = `SELECT * FROM partida a WHERE fkUsuario = ${idCampeao}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(fkCampeao, fkUsuario, resultado) {

    var instrucaoSql = `INSERT INTO (fkCampeao, fkUsuario, resultado) partida VALUES (${fkCampeao}, ${fkUsuario}, ${resultado})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarCampeaoPorPartida,
    cadastrar
}
