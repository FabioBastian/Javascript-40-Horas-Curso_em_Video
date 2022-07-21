function verifica(number=0){

    if (number <= 1024 && (number / 1024) >=1 ){
        var ky = number / 1024
        console.log(ky.toFixed(2))

    }else if (number <= 1048576 && (number / 1048576) >= 1){
        var mb = number / 1048576
        console.log(mb.toFixed(2))

    }else if (number <= 1073741824 && (number / 1073741824) >= 1){
        var bg = number / 1073741824
        console.log(gb.toFixed(2))
        
    }



}

console.log(verifica(10000000))
