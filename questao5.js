function inverteString(str) {
    let stringInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

const stringOriginal = "Exemplo de string para inverter";
const stringInvertida = inverteString(stringOriginal);

// Resultados
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
