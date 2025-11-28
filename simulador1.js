const dadosRepasses = [
    {"orgao": "MEC", "data": "01/01/2024", "valor": 500.00, "status": "sucesso"},
    {"orgao": "Ministério da Saúde", "data": "03/01/2024", "valor": 750.00, "status": "sucesso"},
    {"orgao": "MEC", "data": "05/01/2024", "valor": 1000.00, "status": "sucesso"},
    {"orgao": "Ministério da Educação", "data": "08/01/2024", "valor": 600.00, "status": "sucesso"},
    {"orgao": "Ministério da Saúde", "data": "10/01/2024", "valor": 900.00, "status": "sucesso"},
    {"orgao": "Ministério da Educação", "data": "12/01/2024", "valor": 300.00, "status": "falha", "motivo": "dados inválidos"},
    {"orgao": "Ministério da Saúde", "data": "15/01/2024", "valor": 1200.00, "status": "sucesso"},
    {"orgao": "MEC", "data": "17/01/2024", "valor": 800.00, "status": "falha", "motivo": "falta de verba"},
    {"orgao": "Ministério da Educação", "data": "20/01/2024", "valor": 400.00, "status": "falha", "motivo": "falta de limite"},
    {"orgao": "MEC", "data": "22/01/2024", "valor": 1100.00, "status": "falha", "motivo": "erro desconhecido"}
];

const repassesCorretos = dadosRepasses.filter(r => r.status === "sucesso");
const repassesComErro = dadosRepasses.filter(r => r.status === "falha");

const totalRepasses = dadosRepasses.length;
const totalCorretos = repassesCorretos.length;
const totalErros = repassesComErro.length;

const valorTotalCorretos = repassesCorretos.reduce((s, r) => s + r.valor, 0);
const valorTotalErros = repassesComErro.reduce((s, r) => s + r.valor, 0);
const valorTotalGeral = dadosRepasses.reduce((s, r) => s + r.valor, 0);

const totaisPorOrgao = {};

dadosRepasses.forEach(rep => {
    if (!totaisPorOrgao[rep.orgao]) {
        totaisPorOrgao[rep.orgao] = {
            totalTransacoes: 0,
            totalValor: 0,
            sucessos: 0,
            falhas: 0
        };
    }

    totaisPorOrgao[rep.orgao].totalTransacoes++;
    totaisPorOrgao[rep.orgao].totalValor += rep.valor;

    if (rep.status === "sucesso") {
        totaisPorOrgao[rep.orgao].sucessos++;
    } else {
        totaisPorOrgao[rep.orgao].falhas++;
    }
});

console.log("\n===============================");
console.log("       RESUMO GERAL");
console.log("===============================");
console.log("Total de repasses:", totalRepasses);
console.log("Sucessos:", totalCorretos);
console.log("Falhas:", totalErros);

console.log("\n===============================");
console.log("       VALORES");
console.log("===============================");
console.log("Total aprovado (sucesso): R$", valorTotalCorretos.toFixed(2));
console.log("Total perdido (falhas): R$", valorTotalErros.toFixed(2));
console.log("Total geral: R$", valorTotalGeral.toFixed(2));

console.log("\n===============================");
console.log("       POR ÓRGÃO");
console.log("===============================");
console.log(JSON.stringify(totaisPorOrgao, null, 4));

