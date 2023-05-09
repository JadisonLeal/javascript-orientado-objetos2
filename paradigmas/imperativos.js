// Os paradigmas imperativos são aqueles que usam afirmações para alterar o estado de um programa, 
// da mesma forma como o modo verbal imperativo no português expressa um comando ou ordem para ser executada. 
// Essa categoria se preocupa com o “como” uma tarefa vai ser executada, 
// o seu passo-a-passo e a sequência dessas etapas. Alguns dos paradigmas que se encaixam aqui são os seguintes:

// Estrutural
// Procedural
// Orientado a objetos

// Um exemplo que mostra o paradigma imperativo é a implementação da seguinte função que recebe um vetor e retorna outro vetor 
// com cada um dos valores dobrado:


// function dobra(vetor){
//     let resultados = [];
//     for (let i = 0; i < vetor.length ; i++){
//         resultados.push(vetor[i] * 2);
//     }
//     return resultados;
// };

// Podemos notar que passamos as instruções de como percorrer o vetor, 
// qual operação fazer e o que devemos adicionar ao resultado.


const nomes = ['Vinicius Dias', 'Maria José', 'José Maria', 'Ana'];
const nomesComEspaco = [];
for(const nome of nomes) {
    if(nome.includes(' '))
    nomesComEspaco.push(nome);
}

console.log(nomesComEspaco);