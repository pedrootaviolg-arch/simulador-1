const DADOS = "[\n {\n \"orgao\": \"Polícia Civil\",\n \"data\":\"01/01/2024\",\n \"valor\": 5500.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Polícia RodoviáriaFederal\",\n \"data\": \"02/01/2024\",\n \"valor\": 6000.00,\n\"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n},\n {\n \"orgao\": \"Polícia Militar\",\n \"data\":\"03/01/2024\",\n \"valor\": 4500.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Corpo de Bombeiros\",\n\"data\": \"04/01/2024\",\n \"valor\": 7000.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Guarda Municipal\",\n\"data\": \"05/01/2024\",\n \"valor\": 3500.00,\n \"status\":\"falha\",\n \"motivo\": \"Documentação incompleta\"\n },\n {\n\"orgao\": \"Receita Federal\",\n \"data\": \"06/01/2024\",\n\"valor\": 8000.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Ministério Público\",\n \"data\": \"07/01/2024\",\n\"valor\": 9000.00,\n \"status\": \"falha\",\n \"motivo\":\"Erro no sistema\"\n },\n {\n \"orgao\": \"Defesa Civil\",\n\"data\": \"08/01/2024\",\n \"valor\": 4000.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":\"09/01/2024\",\n \"valor\": 5000.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n\"data\": \"10/01/2024\",\n \"valor\": 6500.00,\n \"status\":\"falha\",\n \"motivo\": \"Falta de recursos\"\n },\n {\n\"orgao\": \"Ibama\",\n \"data\": \"11/01/2024\",\n \"valor\":5500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Anvisa\",\n \"data\": \"12/01/2024\",\n \"valor\":6000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Inmetro\",\n \"data\": \"13/01/2024\",\n \"valor\":3000.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":\"14/01/2024\",\n \"valor\": 7000.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":\"15/01/2024\",\n \"valor\": 8000.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Polícia Civil\",\n \"data\": \"16/01/2024\",\n\"valor\": 5200.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":\"17/01/2024\",\n \"valor\": 6100.00,\n \"status\":\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n\"orgao\": \"Polícia Militar\",\n \"data\": \"18/01/2024\",\n\"valor\": 4600.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"19/01/2024\",\n\"valor\": 7100.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Guarda Municipal\",\n \"data\": \"20/01/2024\",\n\"valor\": 3600.00,\n \"status\": \"falha\",\n \"motivo\":\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"21/01/2024\",\n \"valor\": 8100.00,\n\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"MinistérioPúblico\",\n \"data\": \"22/01/2024\",\n \"valor\": 9100.00,\n\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":\"23/01/2024\",\n \"valor\": 4100.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":\"24/01/2024\",\n \"valor\": 5100.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n\"data\": \"25/01/2024\",\n \"valor\": 6600.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Ibama\",\n \"data\": \"26/01/2024\",\n \"valor\":5600.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Anvisa\",\n \"data\": \"27/01/2024\",\n \"valor\":6100.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Inmetro\",\n \"data\": \"28/01/2024\",\n \"valor\":3100.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":\"29/01/2024\",\n \"valor\": 7100.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":\"30/01/2024\",\n \"valor\": 8100.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Polícia Civil\",\n \"data\": \"31/01/2024\",\n\"valor\": 5300.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":\"01/01/2024\",\n \"valor\": 6200.00,\n \"status\":\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n\"orgao\": \"Polícia Militar\",\n \"data\": \"02/01/2024\",\n\"valor\": 4700.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"03/01/2024\",\n\"valor\": 7200.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Guarda Municipal\",\n \"data\": \"04/01/2024\",\n\"valor\": 3700.00,\n \"status\": \"falha\",\n \"motivo\":\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"05/01/2024\",\n \"valor\": 8200.00,\n\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"MinistérioPúblico\",\n \"data\": \"06/01/2024\",\n \"valor\": 9200.00,\n\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":\"07/01/2024\",\n \"valor\": 4200.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":\"08/01/2024\",\n \"valor\": 5200.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n\"data\": \"09/01/2024\",\n \"valor\": 6700.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Ibama\",\n \"data\": \"10/01/2024\",\n \"valor\":5700.00,\n \"status\": \"sucesso\"\n },\n {\n \n\n\"orgao\": \"Anvisa\",\n \"data\": \"11/01/2024\",\n\"valor\": 6200.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Inmetro\",\n \"data\": \"12/01/2024\",\n\"valor\": 3200.00,\n \"status\": \"falha\",\n \"motivo\":\"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n\"data\": \"13/01/2024\",\n \"valor\": 7200.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":\"14/01/2024\",\n \"valor\": 8200.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Polícia Civil\",\n \"data\": \"15/01/2024\",\n\"valor\": 5400.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":\"16/01/2024\",\n \"valor\": 6300.00,\n \"status\":\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n\"orgao\": \"Polícia Militar\",\n \"data\": \"17/01/2024\",\n\"valor\": 4800.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"18/01/2024\",\n\"valor\": 7300.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Guarda Municipal\",\n \"data\": \"19/01/2024\",\n\"valor\": 3800.00,\n \"status\": \"falha\",\n \"motivo\":\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"20/01/2024\",\n \"valor\": 8300.00,\n\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"MinistérioPúblico\",\n \"data\": \"21/01/2024\",\n \"valor\": 9300.00,\n\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":\"22/01/2024\",\n \"valor\": 4300.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":\"23/01/2024\",\n \"valor\": 5300.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n\"data\": \"24/01/2024\",\n \"valor\": 6800.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Ibama\",\n \"data\": \"25/01/2024\",\n \"valor\":5800.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Anvisa\",\n \"data\": \"26/01/2024\",\n \"valor\":6300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Inmetro\",\n \"data\": \"27/01/2024\",\n \"valor\":3300.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":\"28/01/2024\",\n \"valor\": 7300.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":\"29/01/2024\",\n \"valor\": 8300.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Polícia Civil\",\n \"data\": \"30/01/2024\",\n\"valor\": 5500.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":\"31/01/2024\",\n \"valor\": 6400.00,\n \"status\":\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n\"orgao\": \"Polícia Militar\",\n \"data\": \"01/01/2024\",\n\"valor\": 4900.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"02/01/2024\",\n\"valor\": 7400.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Guarda Municipal\",\n \"data\": \"03/01/2024\",\n\"valor\": 3900.00,\n \"status\": \"falha\",\n \"motivo\":\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"04/01/2024\",\n \"valor\": 8400.00,\n\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"MinistérioPúblico\",\n \"data\": \"05/01/2024\",\n \"valor\": 9400.00,\n\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":\"06/01/2024\",\n \"valor\": 4400.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":\"07/01/2024\",\n \"valor\": 5400.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n\"data\": \"08/01/2024\",\n \"valor\": 6900.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Ibama\",\n \"data\": \"09/01/2024\",\n \"valor\":5900.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Anvisa\",\n \"data\": \"10/01/2024\",\n \"valor\":6400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Inmetro\",\n \"data\": \"11/01/2024\",\n \"valor\":3400.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":\"12/01/2024\",\n \"valor\": 7400.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":\"13/01/2024\",\n \"valor\": 8400.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Polícia Civil\",\n \"data\": \"14/01/2024\",\n\"valor\": 5600.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":\"15/01/2024\",\n \"valor\": 6500.00,\n \"status\":\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n\"orgao\": \"Polícia Militar\",\n \"data\": \"16/01/2024\",\n\"valor\": 5000.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"17/01/2024\",\n\"valor\": 7500.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Guarda Municipal\",\n \"data\": \"18/01/2024\",\n\"valor\": 4000.00,\n \"status\": \"falha\",\n \"motivo\":\"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"19/01/2024\",\n \"valor\": 8500.00,\n\"status\": \"sucesso\"\n },\n {\n \"orgao\": \"MinistérioPúblico\",\n \"data\": \"20/01/2024\",\n \"valor\": 9500.00,\n\"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n},\n {\n \"orgao\": \"Defesa Civil\",\n \"data\":\"21/01/2024\",\n \"valor\": 4500.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\":\"22/01/2024\",\n \"valor\": 5500.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n\"data\": \"23/01/2024\",\n \"valor\": 7000.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Ibama\",\n \"data\": \"24/01/2024\",\n \"valor\":6000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Anvisa\",\n \"data\": \"25/01/2024\",\n \"valor\":6500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\":\"Inmetro\",\n \"data\": \"26/01/2024\",\n \"valor\":3500.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\":\"27/01/2024\",\n \"valor\": 7500.00,\n \"status\":\"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\":\"28/01/2024\",\n \"valor\": 8500.00,\n \"status\":\"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n\"orgao\": \"Polícia Civil\",\n \"data\": \"29/01/2024\",\n\"valor\": 5700.00,\n \"status\": \"sucesso\"\n },\n {\n\"orgao\": \"Polícia Rodoviária Federal\",\n \"data\":\"30/01/2024\",\n \"valor\": 6600.00,\n \"status\":\"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n\"orgao\": \"Polícia Militar\",\n \"data\": \"31/01/2024\",\n\"valor\": 5100.00,\n \"status\": \"sucesso\"\n }\n]";

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
            orgao: '',
            total: 0,
            valorTotal: 0
        });

        indice = detalhesBemSucedidos.length - 1;
    }

    detalhesBemSucedidos[indice].orgao = repasse.orgao;
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
            orgao: '',
            motivo: '',
            total: 0,
            valorTotal: 0
        });

        indice = detalhesFalhas.length - 1;
    }

    detalhesFalhas[indice].orgao = repasse.orgao;
    detalhesFalhas[indice].motivo = repasse.motivo;
    detalhesFalhas[indice].total++;
    detalhesFalhas[indice].valorTotal += repasse.valor;
});

let detalhesFalhasPorMotivo = [];

    falhas.forEach(repasse => {
    let indice = detalhesFalhasPorMotivo.findIndex(item => item.motivo === repasse.motivo);

    if (indice === -1) {
        detalhesFalhasPorMotivo.push({
            motivo: '',
            total: 0,
            valorTotal: 0
        });

        indice = detalhesFalhasPorMotivo.length - 1;
    }

    detalhesFalhasPorMotivo[indice].motivo = repasse.motivo;
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
    repasseComMenorValor = repasses[0]
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
            data: null,
            total: 0
        });

        indiceData = repassesPorData.length - 1;
    }

    repassesPorData[indiceData].data = repasse.data;
    repassesPorData[indiceData].total += repasse.valor;

    let indiceOrgao = repassesPorOrgao.findIndex(item => item.orgao === repasse.orgao);

    if (indiceOrgao === -1) {
        repassesPorOrgao.push({
            orgao: null,
            total: 0
        });

        indiceOrgao = repassesPorOrgao.length - 1;
    }

    repassesPorOrgao[indiceOrgao].orgao = repasse.orgao;
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

let orgaoComMaisRepassesComSuceso = repassesPorOrgao[0];

repassesPorOrgao.forEach(repasse => {
    if (repasse.total > orgaoComMaisRepassesComSuceso.total) {
        orgaoComMaisRepassesComSuceso = repasse;
    }
});

console.log('\nÓrgão com mais repasses com sucesso: ');
console.log('> Órgão: ' + orgaoComMaisRepassesComSuceso.orgao);
console.log('> Total: ' + orgaoComMaisRepassesComSuceso.total);


let orgaoComMaisRepassesFalhados = repassesPorOrgao[0];

repassesPorOrgao.forEach(repasse => {
    if (repasse.total > orgaoComMaisRepassesFalhados.total) {
        orgaoComMaisRepassesFalhados = repasse;
    }
});

console.log('\nÓrgão com mais repasses com falha: ');
console.log('> Órgão: ' + orgaoComMaisRepassesFalhados.orgao);
console.log('> Total: ' + orgaoComMaisRepassesFalhados.total);




console.log('\nQuestão 4:');
let repasse = JSON.parse(DADOS);

const ORGAO_FILTRADO = "MINISTÉRIO DA SAÚDE"; 

console.log("=== História de Usuário 4: Detalhamento Automático de Transações ===\n");

let transacoesFiltradas = repasses.filter(repasse => repasse.orgao === ORGAO_FILTRADO);

console.log(`Órgão filtrado: ${ORGAO_FILTRADO}`);
console.log(`Total de transações encontradas: ${transacoesFiltradas.length}\n`);

if (transacoesFiltradas.length === 0) {
  console.log("Nenhuma transação encontrada para este órgão.");
} else {
  console.log("=== Detalhamento das Transações ===");

  transacoesFiltradas.forEach((t, index) => {
    console.log(`
---------------------------
Transação ${index + 1}
---------------------------
Data:            ${t.data}
Órgão:           ${t.orgao}
Status:          ${t.status}
Valor:           R$ ${t.valor}
Descrição:       ${t.descricao ?? "Não informado"}
ID da operação:  ${t.id ?? "Não informado"}
`);
  });
}

console.log("\n=== Fim do relatório ===");

console.log('\nQuestão 5:');

console.log("=== Identificando transações inválidas ===");

let invalidas = repasses.filter(r =>
    r.status === "falha" && (!r.motivo || r.motivo.trim() === "")
);

if (invalidas.length === 0) {
    console.log("Nenhuma transação inválida encontrada!");
} else {
    invalidas.forEach(repasse => {
        console.log("\nTransação inválida encontrada:");
        console.log("Órgão:", repasse.orgao);
        console.log("Data:", repasse.data);
        console.log("Valor:", repasse.valor);
        console.log("Status:", repasse.status);
        console.log("Motivo: (nenhum informado)");
    });
}

let validas = repasses.filter(r =>
    !(r.status === "falha" && (!r.motivo || r.motivo.trim() === ""))
);

console.log("\n=== Estatísticas considerando apenas transações válidas ===");
console.log("Total de transações válidas:", validas.length);

let totalValores = 0;
validas.forEach(r => totalValores += r.valor);

console.log("Somatório de valores (válidos): R$", totalValores);

console.log('\nQuestão 6:');

let transacoes = JSON.parse(DADOS);

let transacoesComErro = [];

transacoes.forEach(transacao => {

    if (transacao.status === "falha" && !transacao.motivo) {
        transacoesComErro.push(transacao);
    }

});

console.log("===== TRANSAÇÕES COM PROBLEMAS NO PROCESSAMENTO =====");

if (transacoesComErro.length === 0) {
    console.log("Nenhum erro encontrado.");
} else {
    transacoesComErro.forEach(t => {
        console.log("-----------------------------");
        console.log("Órgão: " + t.orgao);
        console.log("Data: " + t.data);
        console.log("Valor: " + t.valor);
        console.log("Status: " + t.status);
        console.log("Motivo da falha: (AUSENTE)");
    });
}

console.log('\nQuestão 7:');

console.log('\nfalta essa questão');


