function spinWords(string){
    array = []
    narray = []
    verifica = []
    posicao = 0
    resposta = []
    txtresposta = ""
    array = string.split(" ")
    for (let c = 0; c < array.length; c++) {
        verifica = array[c];
        if (verifica.length >= 5){
            posicao = -1 + (verifica.length)
            for (let c = 0; c < verifica.length; c++) {
                letra = verifica[posicao];
                posicao--
                narray += letra
            }
        }else{
            resposta.push(verifica)
            verifica = []
        }
        if (narray.length >= 1){
            resposta.push(narray)
            narray = []
        }
    }
    for(let pos in resposta){
        palavra = resposta[pos]
        if (txtresposta.length > 0){
            txtresposta += " " + palavra
        }else{
            txtresposta += palavra
        }
        
    }
    return txtresposta
  }
  console.log(spinWords("o bvxaph smbrsziex uvy"))




  /*  TALVEZ EXPLICAÇão ?
  function spinWords(str){
//return str.replace(/[a-z]{5,}/ig , function(match){ return match.split("").reverse().join("");});
return str.replace(/[a-z]{5,}/ig , (match) => match.split("").reverse().join(""));
  
  var arr = str.split(" ");
  for (let i=0; i<arr.length;i++){
      arr[i] = arr[i].replace(/([a-z]{5,})/ig , arr[i].split("").reverse().join("") );
  }
  return arr.join(" ");
  
  
}*/
/*
SCRIPT ESTA AQUI
var spinWords = (str) => str.replace(/[a-z]{5,}/ig , (match) => match.split("").reverse().join(""));
*/