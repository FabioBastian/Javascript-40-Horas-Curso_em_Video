function solucao(n) {
    c = 0
    while(true){
        verifica = n + c
        
        if(Math.sqrt(verifica) % 1 === 0){
            break
        }
        c++
    }if(c == 0){
        c = -1
    }
    numeroQuadradoPerfeito = c;

    return numeroQuadradoPerfeito;
}
console.log(solucao(9))
module.exports = { solucao }