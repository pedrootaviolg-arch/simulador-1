const usuario  = {
    nome: "Pedro",
    idade: 22,
    cidade: "Pernanbuco" 
}


console.log(usuario.nome)

const usuarioJSON = JSON.stringify(usuario)

console.log(usuarioJSON)


const usuarioJSONRecebido = `{"nome":"Pedro","idade":22,"cidade":"Pernanbuco"}`;

const usuarioRecebido = JSON.parse(usuarioJSONRecebido);

console.log(usuarioRecebido.nome);  
console.log(usuarioRecebido)