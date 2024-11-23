var database = require("../database/config");

function buscarAquariosPorEmpresa(idUsuario) {

  var instrucaoSql = `SELECT * FROM partida a WHERE fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(fkCampeao, fkUsuario, resultado) {

  var instrucaoSql = `INSERT INTO (fkCampeao, fkUsuario, resultado) aquario VALUES (${fkCampeao}, ${fkUsuario}, ${resultado})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
