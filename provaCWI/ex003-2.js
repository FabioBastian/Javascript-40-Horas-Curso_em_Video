function solucao(arrayDePontos, ponto) {
    com = 0;
    for (let c = 0; c < arrayDePontos.length; c++) {
        var posicao = arrayDePontos[c];
        for (let a = 0; a < arrayDePontos.length[c]; a++) {
            d = arrayDePontos[c][a] - ponto[c]
            com =+ d*d
            }console.log(com)
        }
        resultado = Math.sqrt(com);
        return resultado
        
    }
    console.log(solucao(arrayDePontos = [[2, 2], [3, 3]], ponto = [1,1]))