function solucao(palavraCorreta, tentativa) {
    inicio = []
    verifica = []
    igual = 0
    tamanho = 0
    taxa = 0
    verifica = tentativa.split('')
    inicio = palavraCorreta.split('')
    if (palavraCorreta.length > tentativa.length){
        for (let c = 0; c < palavraCorreta.length; c++) {
            iletra = inicio[c];
            vletra = verifica[c];
            if(vletra == iletra){
                igual++
                tamanho = palavraCorreta.length
            }
        }
    }else{
        for (let c = 0; c < inicio.length; c++) {
            iletra = inicio[c];
            vletra = verifica[c];
            if(vletra == iletra){
                igual++
                tamanho = inicio.length
            }
    }   
    }
    taxa = (igual*100) / tamanho
    let resposta = taxa;
    return resposta;
}
module.exports = { solucao }