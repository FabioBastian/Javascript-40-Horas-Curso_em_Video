function processa(){
    var txtnome = document.querySelector("input#txtnome")
    var resposta = document.querySelector("div#resposta") 
    var nome = String(txtnome.value) 
    resposta.innerHTML += `O nome original: ${nome}<br>`
    txtnome.value = ""
    txtnome.focus()
    arrayAlfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    arrayNome = nome.split('')
    var txtResposta = ''
    for (let c = 0; c < arrayNome.length; c++) {
        const letra = arrayNome[c]
        for (let i = 0; i < arrayAlfabeto.length; i++) {
            const letraAlfabeto = arrayAlfabeto[i];
            if (letra == letraAlfabeto) {
                var posicao = i + 1
                txtResposta += arrayAlfabeto[posicao]
                
            }
        }
    }
    resposta.innerHTML += `O nome modificado: ${txtResposta}<br>`
}
