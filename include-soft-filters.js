const numeros =  [55, 22, 14, 44, 67]

console.log(numeros.includes(6))
console.log(numeros.includes(55))

console.log(numeros)

numeros.sort((elementoA, elementoB)=> elementoB - elementoA)
console.log(numeros)

numeros.sort((elementoA, elementoB)=> elementoA - elementoB)
console.log(numeros)

const numerossMaioresQue44 = numeros.filter(elemento => elemento >= 44)
console.log(numerossMaioresQue44)