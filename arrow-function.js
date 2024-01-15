// FORMA PADRÃO (uma linha de código)
function apresentar(nome) {
    return `Meu nome é ${nome}`
}

// ARROW FUNCTION (uma linha de código)
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// ARROW FUNCTION (mais de uma linha de código)
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta da mesma forma