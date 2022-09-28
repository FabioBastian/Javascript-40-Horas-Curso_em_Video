function processa(){
    var txtnome = document.querySelector("input#txtnome")
    var numopcao = document.querySelector("select#numopcao")
    var numposicao = document.querySelector("input#numposicao")
    var resposta = document.querySelector("div#res") 
    var nome = String(txtnome.value)
    var opcao = Number(numopcao.value)
    var posicao = Number(numposicao.value)

    resposta.innerHTML += `O nome original: ${nome}<br>`

    txtnome.value = ""
    var txtResposta = ''
    arrayLetra = []
    arrayAlfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    arrayNome = nome.split(' ')
    
    for (let i = 0; i < arrayNome.length; i++) {
        const palavra = arrayNome[i];
        arrayLetra = palavra.split('');
        for (let i = 0; i < arrayLetra.length; i++) {
            const letra = arrayLetra[i];
            for (let i = 0; i < arrayAlfabeto.length; i++) {
                const letraAlfabeto = arrayAlfabeto[i];
                if (letraAlfabeto == letra) {
                    switch (opcao) {
                        case 0:
                            if ((i + posicao) >= 25) {
                                var acima = (i + posicao) - 26
                                txtResposta += arrayAlfabeto[acima]  
                            }
                            else{
                                txtResposta += arrayAlfabeto[i + posicao]  
                            }
                            break;
                        case 1:
                            if (i <= posicao) {
                                var acima = (26 + i) - posicao
                                if (acima >= 26) {
                                    acima -= 26;
                                }
                                txtResposta += arrayAlfabeto[acima]  
                            }
                            else{
                                txtResposta += arrayAlfabeto[i - posicao]  
                            }
                            break;
                        default:
                            break;
                    }
                }
            } 
        } txtResposta += ' '
    }
    resposta.innerHTML += `Nome modificado: ${txtResposta}<br> \ ---------------------------------------------<br>`
}
