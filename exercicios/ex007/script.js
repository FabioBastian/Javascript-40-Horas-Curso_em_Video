function carregar(){
    array = []
}

function adicionar(){
    var txtnum = document.querySelector("input#txtnum")
    var lista = document.querySelector("div#lista")
    var res = document.querySelector("div#res")
    var num = Number(txtnum.value)
    if (num < 0 || num > 100){
        window.alert("VALOR INVALIDO")
    }else{
        array.push(num)
        lista.innerHTML += `O valor: ${num} foi adicionado.<br>`
        res.innerHTML = "Aguardando solicitação..."
    }
}
function calcular(){
    if (array.length == 0){
        window.alert("NÃO FOI ADICIONADO NENHUM NUMERO")
    }else{
        res.innerHTML = `Ao todo temos ${array.length} adicionados.`
        

    }
}
