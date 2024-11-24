var database = require("../database/config");

function buscarUltimasMedidas(fkUsuario, limite_linhas) {

    instrucaoSql = ''

    instrucaoSql = `select abates as Abate, mortes as Mortes, idPartida as numPartida from partida
	where fkUsuario = ${fkUsuario}
    order by idPartida desc
    limit ${limite_linhas};`


    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasResultado(fkUsuario, limite_linhas) {

    console.log(fkUsuario);

    instrucaoSql = ''

    instrucaoSql = `select count(resultado) as totalPartida, sum(resultado) as somaVitoria, date_format(dataPartida, '%Y-%m-%d') as dataPartida
		    from partida
			    where fkUsuario = ${fkUsuario}
				        group by dataPartida
                        limit ${limite_linhas};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidasResultado
}
