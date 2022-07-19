function verifica() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()

    var iano = document.querySelector("input#msg")
    var res = document.querySelector("div#res")
    var input = document.querySelector("select#opcao")
    midade ++
    var midade = mes - Number(opcao.value)
    
    switch (midade) {
        case 0:
            var txtmes = "Janeiro"
            break;
        case 1:
            var txtmes = "Fevereiro"
            break;
        case 2:
            var txtmes = "Março"
            break;
        case 3:
            var txtmes = "Abril"
            break;
        case 4:
            var txtmes = "Maio"
            break;
        case 5:
            var txtmes = "Junho"
            break;
        case 6:
            var txtmes = "Julho"
            break;
        case 7:
            var txtmes = "Agosto"
            break;
        case 8:
            var txtmes = "Setembro"
            break;
        case 9:
            var txtmes = "Outubro"
            break;
        case 10:
            var txtmes = "Novembro"
            break;
        case 11:
            var txtmes = "Dezembro"
            break;
        default:
            res.innerHTML = "mes invalido"
            break;
    }
    if (iano.value.length == 0 || iano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var midade = mes - Number(opcao.value)
        
        

    }
}