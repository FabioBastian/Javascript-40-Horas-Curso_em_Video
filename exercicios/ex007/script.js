function carregar(){
    array = []
    soma = 0
}
function adicionar(){
    var txtnum = document.querySelector("input#txtnum")
    var lista = document.querySelector("div#lista")
    var res = document.querySelector("div#res")
    var num = Number(txtnum.value)
    if (num <= 0 || num > 100){
        window.alert("VALOR INVALIDO")
    }else{
        array.push(num)
        soma += num
        lista.innerHTML += `O valor: ${num} foi adicionado.<br>`
        res.innerHTML = "Aguardando solicitação..."
    }
}
function calcular(){
    if (array.length == 0){
        window.alert("NÃO FOI ADICIONADO NENHUM NUMERO")
    }else{
        res.innerHTML = `Temos ${array.length} valores adicionados<br>`
        const min = Math. min(...array);
        const max = Math. max(...array);
        res.innerHTML += `O menor valor é ${min}<br>`
        res.innerHTML += `O maior valor é ${max}<br>`
        res.innerHTML += `A soma é ${soma}<br>`
        res.innerHTML += `A media é ${(soma / array.length).toFixed(20)}`
    }
}
