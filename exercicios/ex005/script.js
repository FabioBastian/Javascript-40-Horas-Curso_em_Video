function calcular(){
var res = document.querySelector("div#res")
var txtinicio = document.querySelector("input#txtinicio")
var txtfim = document.querySelector("input#txtfim")
var txtpasso = document.querySelector("input#txtpasso")
var inicio = Number(txtinicio.value)
var fim = Number(txtfim.value)
var passo = Number(txtpasso.value)
res.style.background = "black"
res.style.color = "white"

if (inicio < 0 || inicio > fim || passo <= 0){
    window.alert("VALOR INVALIDO INSERIDO")
}else{
    res.innerHTML = `A sequencia é ${inicio}`
    inicio += passo
    while (fim >= inicio) {
        res.innerHTML += ` => ${inicio}`
        inicio += passo
    }
}
}