const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calculaPercentual(faturamento) {
    // Calcula o valor total do faturamento
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    // Calcula o percentual de cada estado
    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
    }

    return { total, percentuais };
}

const resultado = calculaPercentual(faturamentoPorEstado);

// Resultados
console.log("Faturamento total:", resultado.total.toFixed(2));
console.log("Percentual de representação por estado:");
for (const estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}
