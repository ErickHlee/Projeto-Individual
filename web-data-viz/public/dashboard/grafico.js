
const ctx2 = document.getElementById('chartResultadoPartida');



new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Número de Vitórias',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }, {
            label: 'Número de Derrotas',
            data: [5, 10, 13, 20, 5, 2],
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


async function obterDadosKillMorte(fkUsuario) {
    try {
        console.log(fkUsuario)
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

    console.log(dadosGraficoKillMorte);

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

    // setInterval(atualizarGraficoAbateMorte(graficoKillMorte, fkUsuario), 3000);
}

// async function atualizarGraficoAbateMorte(myChart, fkUsuario) {
//     var dadosAtualizados = await obterDadosKillMorte(fkUsuario);

//     var labelPartida = [];
//     var labelAbate = [];
//     var labelMorte = [];

//     dadosAtualizados.forEach(partida => {
//         labelPartida.push(`Partida: ${partida.numPartida}`)
//         labelAbate.push(partida.Abate);
//         labelMorte.push(partida.Mortes);
//     });

//     myChart.config.data.labels = labelPartida;
//     myChart.config.data.datasets[0].data = labelAbate;
//     myChart.config.data.datasets[1].data = labelMorte;
//     myChart.update();
// }
