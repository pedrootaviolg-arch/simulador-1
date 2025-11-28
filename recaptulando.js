function fazerCafe() {
    console.log("Fever a água")
    console.log("Adicionar o café")
    console.log("Servir o café")
}

/** 
fazerCafe()
fazerCafe()
fazerCafe()
*/
function fazerCafeConformePedido(Adicional) {
    console.log("Ferver a água")
    console.log("Adicionar o café")
    console.log("Adicionar" + Adicional)
    console.log("servir o café")
}
/** 
fazerCafeConformePedido("leite")
fazerCafeConformePedido("baunilha")
*/
function fazerCafeECalcularValor(adicional) {
    let valordoCafe = 5

    if(adicional == "baunilha") {
        valordoCafe = valordoCafe + 1.50
    }

    fazerCafeConformePedido(adicional)
    return(valordoCafe)
}

console.log(`O valor do café com leite é de R$ ${fazerCafeECalcularValor("leite")}`);
console.log(`O valor do café com leite é de R$ ${fazerCafeECalcularValor("baunilha")}`);