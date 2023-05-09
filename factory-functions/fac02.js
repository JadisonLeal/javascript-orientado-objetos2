// As factory functions são diferentes das funções construtoras. 
// Veja um exemplo de função construtora, como fizemos 
// anteriormente durante a aula:


function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibeInfos = function() {
        return `${nome}, ${email}`;
    } 
}

// As funções construtoras devem ser chamadas com o 
// operador new para criar instâncias do objeto User:

const newUser = new User('Juliana', 'j@j.com');
console.log(newUser);
console.log(newUser.exibeInfos());  //Juliana, j@j.com


//retorno esperado de console.log(newUser);

// User {
//     nome: 'Juliana',
//     email: 'j@j.com',
//     exibeInfos: [Function (anonymous)]
//   }

//retorno esperado de console.log(newUser.exibeInfos());
// Juliana, j@j.com

// O retorno no console é praticamente o mesmo do exemplo de fac01.js, com exceção 
// que agora exibeInfos() é uma função anônima e o objeto é 
// explicitamente uma instância de User:

//No caso da factory function não há perda de contexto na execução dos métodos internos.

// Quais as diferenças e qual devo usar?

// Não há consenso, pois ambas têm vantagens e desvantagens. A sintaxe da função 
// construtora é mais confortável para quem está acostumado com o uso de classes; 
// já a factory function é mais flexível a respeito do tipo de objeto que será retornado.

// Boa parte dos frameworks e bibliotecas do NodeJS vão trabalhar 
// com classes ou construtores, instanciados com new.