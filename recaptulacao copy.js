const pagarMenu = new Promise((resolve, reject) => {
    setTimeout(() => {
        const menu = ['Salgadinho', 'Carne', 'Biscoito', 'Abacaxi'];
        if (menu.length > 0) {
            resolve(menu);
        } else {
            reject('Erro ao obter o cardápio');
        }
    }, 2000);
});

/** 
pagarMenu.then(menu => {
        console.log('Cardápio disponível: ' + menu);
    }).catch(erro => {
        console.log('Erro: ' + erro);
    })
*/

async function processarPedido() {
    const menu = await pagarMenu
    console.log(menu)

    if(menu.includes(item)) {
        console.log(`${item} está disponíbel. Processando o pedido... `)
        await new promise(resolve => setTimeout(resolve, 3000))
        console.log('pedido de '+item+' Processando com sucesso')    
    } else {
        console.log('${item} não disponível no cardápio.')
    }
}

processarPedido('Salgadinho').then(() => {
    console.log('pedido foi entrege com sucesso')
}).catch(erro => {
    console.log('Erro ao entregar o pedido: +erro')
}).finally(() => {
    console.log('finalizando o pedido')
})