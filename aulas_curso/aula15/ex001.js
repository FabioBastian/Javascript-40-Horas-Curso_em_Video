let num = [5, 8, 6, 4, 5, 6]
console.log(num)
num[0] = 4
num.push(10)
console.log(num)
console.log(`Tamanho da variavel ${num.length}`)
num.sort()
for (let c = 0; c < num.length; c++) {
    console.log(num[c]);
    
}