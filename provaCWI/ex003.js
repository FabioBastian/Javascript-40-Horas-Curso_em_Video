function solucao(arrayDePontos, ponto) {
    for (let c = 0; c < arrayDePontos.length; c++) {
        var posicao = arrayDePontos[c];
        for (let c = 0; c < posicao.length; c++) {
            var numero = posicao[c];
            console.log(numero)
            if (c % 2 == 0){
                x = numero
            }else if(c % 2 != 0){
                y = numero
            }
            
        }console.log(y)
    }
    return [];
}

module.exports = { solucao }