var lista = [10, 1, 5, 9, 8, 12, 15];

console.log(lista.sort()); // [1, 10, 12, 15, 5, 8, 9]


// a função sort() usa por padrão a ordenação alfabética baseada 
// na tabela Unicode. Apesar de inesperado isso está documentado. 
// A solução é usar a nossa própria função de comparação.

// Implementando função de comparação
// O sort recebe opcionalmente uma função de comparação que, 
// dados dois valores, deve devolver um número inteiro:

// Se for 0 indica que são iguais
// Se for -1 indica que o primeiro valor é menor
// Se for 1, o segundo é menor.
// Podemos criar essa função:

function comparaNumeros(a, b) {
    if(a == b){
        return 0;
    }
    if(a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
}

console.log(lista.sort(comparaNumeros)); // [1, 5, 8, 9, 10, 12, 15]

// Simplicando a implementação
// É possível trocar a função nomeada pra ser anônima. 
// E trocar os três IFs por uma conta simples: a - b.

// Repare que o resultado dessa conta é sempre 0 se forem iguais, 
// -1 se a é menor e 1 se b é menor. Exatamente o que precisamos.

// Juntanto tudo isso com a sintaxe de arrow functions do ES6 
// pra escrever menos, podemos simplesmente fazer:

console.log(lista.sort((a, b) => a - b));  // [1, 5, 8, 9, 10, 12, 15]