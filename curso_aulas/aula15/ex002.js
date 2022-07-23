num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let pos in num){
    console.log(num[pos])
}
let pos = num.indexOf(0)
if(pos == -1){
    console.log("O valor não foi encontrado.")
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}