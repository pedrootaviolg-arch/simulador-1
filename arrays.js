const numerosInteiros = [1,2,3,4,5]
//console.log(numerosInteiros)    

let listaDecompras = [
    {
        item: "Alface",
        quantidade: 4
    },
    {
        item:"Batata",
        quantidade: 3
    }
]

//console.log(listaDecompras)

//percorrendo um array
let numeroDeExecucao = 1
for (elemento of listaDecompras) {
    console.log(`Execucao N ${numeroDeExecucao}`)
    console.log(elemento)
    numeroDeExecucao++
}

// MAP
function transformarItemEmMaiúsculo(elemento){
    return {
        item:elemento.item.toUpperCase(),
        quantidade:elemento.quantidade
    }
}

listaDecompras = listaDecompras.map(transformarItemEmMaiúsculo)

console.log(listaDecompras)

listaDecompras = listaDecompras.map(elemento => {
     return {
        item:elemento.item,
        quantidade:elemento.quantidade+2 
     }
})

console.log(listaDecompras)

const total = listaDecompras.reduce((acumulador,elemento) => acumulador + elemento.quantidade,0);
console.log(`total de itens: ${total}`);

console.log(listaDecompras.length)

console.log(listaDecompras[0])

const alface = listaDecompras.find(elemento => elemento.item == "ALFACE")
console.log(alface)