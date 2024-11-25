async function obterDadosVitoriaDerrota(fkUsuario) {
    try {
        var resposta = await fetch(`/medida/ultimoResultado/${fkUsuario}`, {
            cache: 'no-store'
        });
        var respostaJson = await resposta.json()
        return respostaJson;
    } catch (erro) {
        throw new Error(erro);
    }
}

async function criarGraficoVitoriaDerrota(fkUsuario) {
    var dadosGraficoVitoriaDerrota = await obterDadosVitoriaDerrota(fkUsuario);

    var labelData = [];
    var labelVitoria = [];
    var labelDerrota = [];

    dadosGraficoVitoriaDerrota.forEach(partida => {
        labelData.push(partida.dataPartida)

        var contagemDerrota = partida.totalPartida - partida.somaVitoria
        labelVitoria.push(partida.somaVitoria);
        labelDerrota.push(contagemDerrota);
    });

    const ctx2 = document.getElementById('chartResultadoPartida');

    // ALTERAR O MODO DE NUM INTEIRO
    graficoVitoriaDerrota = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labelData,
            datasets: [{
                label: 'Número de Vitórias',
                data: labelVitoria,
                borderWidth: 1
            }, {
                label: 'Número de Derrotas',
                data: labelDerrota,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


async function obterDadosKillMorte(fkUsuario) {
    try {
        // console.log(fkUsuario)
        var resposta = await fetch(`/medida/ultimos/${fkUsuario}`, {
            cache: 'no-store'
        });
        var respostaJson = await resposta.json()
        respostaJson.reverse();
        return respostaJson;
    } catch (erro) {
        throw new Error(erro);
    }
}

async function criarGraficoKillMorte(fkUsuario) {
    var dadosGraficoKillMorte = await obterDadosKillMorte(fkUsuario);

    // console.log(dadosGraficoKillMorte);

    var labelPartida = [];
    var labelAbate = [];
    var labelMorte = [];


    dadosGraficoKillMorte.forEach(partida => {
        labelPartida.push(`Partida: ${partida.numPartida}`)
        labelAbate.push(partida.Abate);
        labelMorte.push(partida.Mortes);
    });

    const ctx = document.getElementById('chartKillMorte');

    graficoKillMorte = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelPartida,
            datasets: [{
                label: 'Quantidade de Abates',
                data: labelAbate,
                borderWidth: 1
            }, {
                label: 'Quantidade de Mortes',
                data: labelMorte,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
