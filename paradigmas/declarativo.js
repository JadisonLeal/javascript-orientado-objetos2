// Uma outra categoria de paradigma é o declarativo. Podemos dizer que uma característica dele é 
// expressar a lógica de um processo sem descrever o seu controle de fluxo. Ou seja, 
// é associado ao “o quê” uma tarefa vai resultar ou retornar. Um paradigma que pode se encaixar 
// nessa categoria é o paradigma funcional.

// Uma implementação declarativa do mesmo problema de dobrar os valores de um vetor 
// pode ser feita da seguinte forma:

// function dobra(vetor){
//     return vetor.map((item) => item * 2);
//     }

// Podemos observar que não foi necessário explicitar como iterar sobre 
// o laço de repetição ou atribuir os novos valores.

const nomes = ['Vinicius Dias', 'Maria José', 'José Maria', 'Ana'];
const nomesComEspaco = nomes.filter(nome => nome.includes(' '));

console.log(nomesComEspaco);