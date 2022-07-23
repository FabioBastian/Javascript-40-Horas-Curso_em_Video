let amigo = {nome: "Jose", sexo: "M", peso: 85.4, engordar(p=0){console.log(`engordou ${p}Kg`); this.peso += 1}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa: ${amigo.peso}`)