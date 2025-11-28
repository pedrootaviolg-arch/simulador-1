const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numeroAleatorio = Math.random();

        if (numeroAleatorio < 0.5) {
            resolve(numeroAleatorio); 
        } else {
            reject('Erro ao gerar o número');
        }
    }, 1000);
});

minhaPromise
    .then((resultado) => {
        console.log(`Número gerado: ${resultado}`);
    })
    .catch((erro) => {
        console.log(erro);
    });