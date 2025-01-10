function verificaFibonacci(numero) {
    let a = 0, b = 1, temp;

    while (a < numero) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (a === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

const numero = 20; // Altere aqui para testar outros números
console.log(verificaFibonacci(numero));
