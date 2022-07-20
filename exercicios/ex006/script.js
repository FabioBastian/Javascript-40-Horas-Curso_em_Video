function calcular(){
    let txtmult = document.querySelector("input#txtmult")
    let res = document.querySelector("div#res")
    var mult = Number(txtmult.value)
    if(mult <= 0){
        window.alert("VALOR INVALIDO DIGITADO.")
    }else{
        res.innerHTML = "Resultado: <br> <br>"
        for (var c=1; c<=10; c++){
            var r = c * mult
            res.innerHTML += `${c} X ${mult} = ${r}<br>`
        }
    }
}