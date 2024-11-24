var database = require("../database/config")

function cadastrar(fkCampeao, idPartida, fkUsuario, abates, mortes, resultado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkCampeao, fkUsuario, abates, mortes, resultado);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO partida (idPartida, fkCampeao, fkUsuario, abates, mortes, resultado, dataPartida) VALUES (${idPartida}, '${fkCampeao}', '${fkUsuario}', '${abates}', ${mortes}, '${resultado}', CURDATE());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedia(fkUsuario) {
    var instrucaoSql = `
    select truncate(avg(abates), 2) as mediaAbate, truncate(avg(mortes),2) as mediaMorte, count(resultado) as totalPartida, sum(resultado) as somaVitoria
	from partida
		where fkUsuario = ${fkUsuario};
    `;
    return database.executar(instrucaoSql);
}

function buscarUltimaPartida(fkUsuario) {
    var instrucaoSql = ` select idPartida from partida
        where fkUsuario = ${fkUsuario}
            order by idPartida desc
                limit 1;`
    return database.executar(instrucaoSql);
}

function buscar2UltimasPartidas(fkUsuario) {
    var instrucaoSql = `select c.nome as nomeCampeao, c.icone as iconeCampeao,
        p.idPartida as numPartida, p.fkUsuario as usuario, p.abates as abates, p.mortes as mortes, p.resultado as resultadoPartida, date_format(p.dataPartida, '%Y-%m-%d') as dataJogo
            from campeao as c
                join partida as p
                    on c.idCampeao = p.fkCampeao
                        where fkUsuario = ${fkUsuario}
                            order by idPartida desc
							    limit 2;`

        return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarMedia,
    buscarUltimaPartida,
    buscar2UltimasPartidas
};
