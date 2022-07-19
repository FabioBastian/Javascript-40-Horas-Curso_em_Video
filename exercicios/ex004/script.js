function verifica() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()

    var iano = document.querySelector("input#msg")
    var res = document.querySelector("div#res")
    var input = document.querySelector("select#opcao")
    
    window.alert(input.value)
    if (iano.value.length == 0 || iano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var aidade = ano - Number(iano.value)
        var midade = mes - Number(opcao.value)
        midade ++
        res.innerHTML = `Idade calculada: ${aidade} anos ${midade} messes.`

    }
}