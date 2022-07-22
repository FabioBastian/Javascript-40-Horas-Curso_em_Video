function solucao(mapa) {
    X = 0
    Y = 0
    for (let c = 0; c < mapa.length; c++) {
        var letra = mapa[c];
        if (letra == "c"){
            Y++
        }else if (letra == "b"){
            Y--
        }else if (letra == "d"){
            X++
        }else if (letra == "e"){
            X--
        }
    } 
    resposta = `X:${X}, Y:${Y}`
    

    return resposta;
}
console.log(solucao(["e", "d", "b"]))
module.exports = { solucao }