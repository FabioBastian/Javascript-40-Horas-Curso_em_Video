function verifica(number=0){

    if (number <= 1048576 && (number / 1024) >=1 ){
        var ky = number / 1024
        console.log(`${ky.toFixed(2)} KY`)
    }
    else if (number <= 1073741824 && (number / 1048576) >= 1){
        var mb = number / 1048576
        console.log(`${mb.toFixed(2)} MB`)
    }
    else if (number <= 1099511627776 && (number / 1073741824) >= 1){
        var gb = number / 1073741824
        console.log(`${gb.toFixed(2)} GB`)
    }
    else if (number <= 1125899906842624 && (number / 1099511627776) >= 1){
        var pb = number / 1099511627776
        console.log(`${pb.toFixed(2)} PB`)
    }
    else if (number <= 1152921504606847000 && (number / 1125899906842624) >= 1){
        var eb = number / 1125899906842624
        console.log(`${eb.toFixed(2)} EB`)
    }
    else if (number <= 8.1321e+25 && (number / 1152921504606847000) >= 1){
        var zb = number / 1152921504606847000
        console.log(`${zb.toFixed(2)} ZB`)
    }
    else if (number <= 8.132099999999999e+28 && (number / 8.1321e+25) >= 1){
        var yb = number / 8.1321e+25
        console.log(`${yb.toFixed(2)} YB`)
    }
}

console.log(verifica(2000000000000000000000000000))
