function calcular() {

    var gold = gold_atual.value;
    var tempo = inp_tempo.value;
    var minions = minion_abatido.value;
    var abates = inp_abate.value;
    var assist = inp_assist.value;

    var catapa = 0;

    if (gold == "" || minions == "" || abates == "" || tempo == "" || assist == "") {
        return alert("Preencha os campos!");
    } else if (tempo < 7) {
        return alert("Tempo inválido.");
    }

    span1.innerHTML = ``;

    var goldOverTime = 122.4;
    var somaGoldOverTime = 0;

    for (let minuto = 1; minuto < tempo; minuto ++) {
        somaGoldOverTime += goldOverTime;
    }

    var goldAbate = abates * 300
    var goldAssist = assist * 150
    var goldOndas = 105 + (75 * catapa);
    var goldTempo = 122.4 * tempo
    var somaTotal = goldAbate + goldOndas + goldTempo + goldAssist + somaGoldOverTime;

    span1.innerHTML = `
        Com a duração de ${tempo} minutos, você concluiu com ${gold} de ouro armazenado no final da partida,
        coletou total de ${minions} minions,
        teve ${abates} abates e ${assist} assistência.
        Com isso, você obteve ${Math.round(somaTotal, 2) + 500} de ouro.`

}
