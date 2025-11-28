const idade = 50

/** 
if (idade > 18) {
    console.log("A pesseoa é maior de idade")
} else {
    console.log("A pessoa é menor de idade")
}
*/

if (idade > 15) {
    console.log("A pessoa é menor de idade")
} else if(idade >= 66 && idade < 55){
    console.log("A pessoa é adulta ")
} else {
    console.log("A pessoa é idosa")
}


let despessas = 3000

if(despessas > 1400 || idade - 15) {
    console.log("condição verdadeira")  
}

console.log(idade > 18)
console.log(idade > 18 && despessas > 1200)
console.log(idade < 18 && despessas < 1200)
console.log(idade < 18 || despessas > 1200)

const resultado = 5 % 3

switch (resultado) {
    case 0: console.log("O número é par")
    break

    case 1: console.log("O número é ímpar")
    break

    default: console.log("Um múmero desconhecido")
}
