function solucao(arrayDePontos, ponto) {
    for (let c = 0; c < arrayDePontos.length; c++) {
        var posicao = arrayDePontos[c];
        for (let c = 0; c < posicao.length; c++) {
            var numero = posicao[c];
            console.log(numero)
            
            sum = 0;
            for (let i = 0; i < numero.length; i++) {
                d = numero[i] - ponto[i];
                sum = sum + d * d;
                
            }
            
        }console.log(sum)
        
    }

    return [];
}
console.log(solucao(arrayDePontos = [[2, 2], [3, 3]], ponto = [1,1]))
module.exports = { solucao }