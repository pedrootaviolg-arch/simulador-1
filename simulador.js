const DADOS = [
  {
    "orgao": "Polícia Civil",
    "data": "01/01/2024",
    "valor": 5500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "02/01/2024",
    "valor": 6000.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Militar",
    "data": "03/01/2024",
    "valor": 4500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "04/01/2024",
    "valor": 7000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "05/01/2024",
    "valor": 3500.00,
    "status": "falha",
    "motivo": "Documentação incompleta"
  },
  {
    "orgao": "Receita Federal",
    "data": "06/01/2024",
    "valor": 8000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "07/01/2024",
    "valor": 9000.00,
    "status": "falha",
    "motivo": "Erro no sistema"
  },
  {
    "orgao": "Defesa Civil",
    "data": "08/01/2024",
    "valor": 4000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "09/01/2024",
    "valor": 5000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "10/01/2024",
    "valor": 6500.00,
    "status": "falha",
    "motivo": "Falta de recursos"
  },
  {
    "orgao": "Ibama",
    "data": "11/01/2024",
    "valor": 5500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "12/01/2024",
    "valor": 6000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "13/01/2024",
    "valor": 3000.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "14/01/2024",
    "valor": 7000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "15/01/2024",
    "valor": 8000.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "16/01/2024",
    "valor": 5200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "17/01/2024",
    "valor": 6100.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "18/01/2024",
    "valor": 4600.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "19/01/2024",
    "valor": 7100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Múnicipal",
    "data": "20/01/2024",
    "valor": 3600.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "21/01/2024",
    "valor": 8100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministéio Público",
    "data": "22/01/2024",
    "valor": 9100.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Cívil",
    "data": "23/01/2024",
    "valor": 4100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "24/01/2024",
    "valor": 5100.00,
    "status": "sucesso",
  },
  {
    "orgao": "Polícia Ferderal",
    "data": "25/01/2024",
    "valor": 6600.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "26/01/2024",
    "valor": 5600.00,
    "status": "sucesso",
  },
  {
    "orgao": "Anvisa",
    "data": "27/01/2024",
    "valor": 6100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "28/01/2024",
    "valor": 3100.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "29/01/2024",
    "valor": 7100.00,
    "status": "sucesso",
  },
  {
    "orgao": "Susep",
    "data": "30/01/2024",
    "valor": 8100.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "31/01/2024",
    "valor": 5300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodovíaria ferderal",
    "data": "01/01/2024",
    "valor": 6200.00,
    "status": "falha",
    "motivo": "Erro humano",
  },
  {
    "orgao": "Polícia Militar",
    "data": "02/01/2024",
    "valor": 4700.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "03/01/2024",
    "valor": 7200.00,
    "status": "sucesso",
  },
  {
    "orgao": "Guarda Mínicipal",
    "data": "04/01/2024",
    "valor": 3700.00,
    "status": "falha",
    "motivo": "Sistema fora do ar",
  },
  {
    "orgao": "Receita Federal",
    "data": "05/01/2024",
    "valor": 8200.00,
    "status": "sucesso",
  },
  {
    "orgao": "Mistério público",
    "data": "06/01/2024",
    "valor": 9200.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civl",
    "data": "07/01/2024",
    "valor": 4200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "08/01/2024",
    "valor": 5200.00,
    "status": "sucesso",
  },
  {
    "orgao": "Polícia federal",
    "data": "09/01/2024",
    "valor": 6700.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "10/01/2024",
    "valor": 5700.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "11/01/2024",
    "valor": 6200.00,
    "status": "sucesso",
  },
  {
    "orgao": "Inmetro",
    "data": "12/01/2024",
    "valor": 3200.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "13/01/2024",
    "valor": 7200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "14/01/2024",
    "valor": 8200.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "15/01/2024",
    "valor": 5400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "16/01/2024",
    "valor": 6300.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "17/01/2024",
    "valor": 4800.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "18/01/2024",
    "valor": 7300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "19/01/2024",
    "valor": 3800.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "20/01/2024",
    "valor": 8300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "21/01/2024",
    "valor": 9300.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civil",
    "data": "22/01/2024",
    "valor": 4300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "23/01/2024",
    "valor": 5300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "24/01/2024",
    "valor": 6800.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "25/01/2024",
    "valor": 5800.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "26/01/2024",
    "valor": 6300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "27/01/2024",
    "valor": 3300.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "28/01/2024",
    "valor": 7300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "29/01/2024",
    "valor": 8300.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "30/01/2024",
    "valor": 5500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "31/01/2024",
    "valor": 6400.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "01/01/2024",
    "valor": 4900.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "02/01/2024",
    "valor": 7400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "03/01/2024",
    "valor": 3900.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "04/01/2024",
    "valor": 8400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "05/01/2024",
    "valor": 9400.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civil",
    "data": "06/01/2024",
    "valor": 4400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "07/01/2024",
    "valor": 5400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "08/01/2024",
    "valor": 6900.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "09/01/2024",
    "valor": 5900.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "10/01/2024",
    "valor": 6400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "11/01/2024",
    "valor": 3400.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "12/01/2024",
    "valor": 7400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "13/01/2024",
    "valor": 8400.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "14/01/2024",
    "valor": 5600.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "15/01/2024",
    "valor": 6500.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "16/01/2024",
    "valor": 5000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "17/01/2024",
    "valor": 7500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "18/01/2024",
    "valor": 4000.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "19/01/2024",
    "valor": 8500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "20/01/2024",
    "valor": 9500.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civil",
    "data": "21/01/2024",
    "valor": 4500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "22/01/2024",
    "valor": 5500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "23/01/2024",
    "valor": 7000.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "24/01/2024",
    "valor": 6000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "25/01/2024",
    "valor": 6500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "26/01/2024",
    "valor": 3500.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "27/01/2024",
    "valor": 7500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "28/01/2024",
    "valor": 8500.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "29/01/2024",
    "valor": 5700.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "30/01/2024",
    "valor": 6600.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "31/01/2024",
    "valor": 5100.00,
    "status": "sucesso"
  }
];

let repasses = JSON.parse(DADOS);

console.log('Questão 1:');
console.log('Total de repasses processados: ' + repasses.length);
console.log('\n------');

console.log('\nQuestão 2:');

let bemSucedidos = repasses.filter(r => r.status === 'sucesso'),
    detalhesBemSucedidos = [];

bemSucedidos.forEach(repasse => {
    let indice = detalhesBemSucedidos.findIndex(item => item.orgao === repasse.orgao);

    if (indice === -1) {
        detalhesBemSucedidos.push({
            orgao: repasse.orgao,
            total: 0,
            valorTotal: 0
        });

        indice = detalhesBemSucedidos.length - 1;
    }

    detalhesBemSucedidos[indice].total++;
    detalhesBemSucedidos[indice].valorTotal += repasse.valor;
});

console.log('Repasses bem sucedidos:');
console.log('Total de repasses bem sucedidos: ' + bemSucedidos.length);
console.log('Total de repasses bem sucedidos por órgão: ');
detalhesBemSucedidos.forEach(
    repasse => console.log('> Órgão: ' + repasse.orgao + ' - Total: ' + repasse.total)
);

let valorTotalBemSucedidos = 0;

detalhesBemSucedidos.forEach(
    repasse => valorTotalBemSucedidos += repasse.valorTotal
);

console.log('\nValor total de repasses bem sucedidos: ' + valorTotalBemSucedidos);
console.log('Valor total de repasses bem sucedidos por órgão: ');
detalhesBemSucedidos.forEach(
    repasse => console.log('> Órgão: ' + repasse.orgao + ' - Valor total: ' + repasse.valorTotal)
);

let falhas = repasses.filter(r => r.status === 'falha'),
    detalhesFalhas = [];

falhas.forEach(repasse => {
    let indice = detalhesFalhas.findIndex(item => item.orgao === repasse.orgao);

    if (indice === -1) {
        detalhesFalhas.push({
            orgao: repasse.orgao,
            motivo: repasse.motivo,
            total: 0,
            valorTotal: 0
        });

        indice = detalhesFalhas.length - 1;
    }

    detalhesFalhas[indice].total++;
    detalhesFalhas[indice].valorTotal += repasse.valor;
});

let detalhesFalhasPorMotivo = [];

falhas.forEach(repasse => {
    let indice = detalhesFalhasPorMotivo.findIndex(item => item.motivo === repasse.motivo);

    if (indice === -1) {
        detalhesFalhasPorMotivo.push({
            motivo: repasse.motivo,
            total: 0,
            valorTotal: 0
        });

        indice = detalhesFalhasPorMotivo.length - 1;
    }

    detalhesFalhasPorMotivo[indice].total++;
    detalhesFalhasPorMotivo[indice].valorTotal += repasse.valor;
});

console.log('\nRepasses com falha:');
console.log('Total de repasses com falhas: ' + falhas.length);
console.log('Total de repasses com falhas por órgão: ');
detalhesFalhas.forEach(
    repasse => console.log('> Órgão: ' + repasse.orgao + ' - Total: ' + repasse.total)
);

console.log('\nTotal de repasses com falhas por motivo: ');
detalhesFalhasPorMotivo.forEach(
    repasse => console.log('> Motivo: ' + repasse.motivo + ' - Total: ' + repasse.total)
);

let valorTotalComFalhas = 0;

detalhesFalhas.forEach(
    repasse => valorTotalComFalhas += repasse.valorTotal
);

console.log('\nValor total de repasses com falha: ' + valorTotalComFalhas);
console.log('Valor total de repasses com falha por órgão: ');
detalhesFalhas.forEach(
    repasse => console.log('> Órgão: ' + repasse.orgao + ' - Valor total: ' + repasse.valorTotal)
);

console.log('\nValor total de repasses com falha por motivo: ');
detalhesFalhasPorMotivo.forEach(
    repasse => console.log('> Motivo: ' + repasse.motivo + ' - Valor total: ' + repasse.valorTotal)
);

console.log('\nQuestão 3:');
console.log('\n------');

let repasseComMaiorValor = repasses[0],
    repasseComMenorValor = repasses[0],
    repassesPorData = [],
    repassesPorOrgao = [];

repasses.forEach(repasse => {
    if (repasse.valor > repasseComMaiorValor.valor) {
        repasseComMaiorValor = repasse;
    }

    if (repasse.valor < repasseComMenorValor.valor) {
        repasseComMenorValor = repasse;
    }

    let indiceData = repassesPorData.findIndex(item => item.data === repasse.data);

    if (indiceData === -1) {
        repassesPorData.push({
            data: repasse.data,
            total: 0
        });

        indiceData = repassesPorData.length - 1;
    }

    repassesPorData[indiceData].total += repasse.valor;

    let indiceOrgao = repassesPorOrgao.findIndex(item => item.orgao === repasse.orgao);

    if (indiceOrgao === -1) {
        repassesPorOrgao.push({
            orgao: repasse.orgao,
            total: 0
        });

        indiceOrgao = repassesPorOrgao.length - 1;
    }

    repassesPorOrgao[indiceOrgao].total += repasse.valor;
});

console.log('\nRepasse com maior valor: ');
console.log('> Órgão: ' + repasseComMaiorValor.orgao);
console.log('>> Data: ' + repasseComMaiorValor.data);
console.log('>> Valor: ' + repasseComMaiorValor.valor);
console.log('>> Status: ' + repasseComMaiorValor.status);
if (repasseComMaiorValor.motivo) {
    console.log('>> Motivo: ' + repasseComMaiorValor.motivo);
}

console.log('\nRepasse com menor valor: ');
console.log('> Órgão: ' + repasseComMenorValor.orgao);
console.log('>> Data: ' + repasseComMenorValor.data);
console.log('>> Valor: ' + repasseComMenorValor.valor);
console.log('>> Status: ' + repasseComMenorValor.status);
if (repasseComMenorValor.motivo) {
    console.log('>> Motivo: ' + repasseComMenorValor.motivo);
}

let diaComMaisRepasses = repassesPorData[0];

repassesPorData.forEach(repasse => {
    if (repasse.total > diaComMaisRepasses.total) {
        diaComMaisRepasses = repasse;
    }
});

console.log('\nDia com mais repasses: ');
console.log('> Dia: ' + diaComMaisRepasses.data);
console.log('> Total: ' + diaComMaisRepasses.total);

let orgaoComMaisRepasses = repassesPorOrgao[0];

repassesPorOrgao.forEach(repasse => {
    if (repasse.total > orgaoComMaisRepasses.total) {
        orgaoComMaisRepasses = repasse;
    }
});

console.log('\nÓrgão com mais repasses: ');
console.log('> Órgão: ' + orgaoComMaisRepasses.orgao);
console.log('> Total: ' + orgaoComMaisRepasses.total);



  



