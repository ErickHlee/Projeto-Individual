var database = require("../database/config")

function cadastrar(fkCampeao, fkUsuario, abates, mortes, resultado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkCampeao, fkUsuario, abates, mortes, resultado);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO partida (fkCampeao, fkUsuario, abates, mortes, resultado) VALUES ('${fkCampeao}', '${fkUsuario}', '${mortes}', ${mortes}, '${resultado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibir(abates, mortes, resultado) {
    var instrucaoSql = `
    select avg(${abates}), avg(${mortes}),
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    exibir
};
