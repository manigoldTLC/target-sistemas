const fs = require('fs');

// Importando os dados do JSON
const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

function calculaFaturamento(dados) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let soma = 0;
    let diasComFaturamento = 0;

    const diasValidos = dados.filter(d => d.valor > 0);

    diasValidos.forEach(d => {
        if (d.valor < menorValor) menorValor = d.valor;
        if (d.valor > maiorValor) maiorValor = d.valor;
        soma += d.valor;
    });

    const media = soma / diasValidos.length;

    diasValidos.forEach(d => {
        if (d.valor > media) diasComFaturamento++;
    });

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia: diasComFaturamento,
    };
}

const resultado = calculaFaturamento(dados);

// Resultados
console.log("Menor valor de faturamento:", resultado.menorValor.toFixed(2));
console.log("Maior valor de faturamento:", resultado.maiorValor.toFixed(2));
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
