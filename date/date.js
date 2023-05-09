// Como o nome sugere, o Date é um objeto utilizado para trabalhar as datas e o tempo em JavaScript. 
// No dia a dia de desenvolvimento é muito comum precisarmos utilizar a informação da data e hora 
// para realizar alguma tarefa ou, especialmente, lidar com dados. No entanto, em JavaScript, 
// essa mesma informação pode assumir diferentes tipos.

// Vamos supor que você decida utilizar a variável tempo para guardar uma informação da data e, 
// para obter o valor, você decida chamar o método Date() do objeto Date:

let dataEHora = Date();
console.log(dataEHora); //Wed Apr 12 2023 16:54:04 GMT-0300 (Horário Padrão de Brasília)

console.log(typeof dataEHora); //string

// Como podemos ver, a saída da variável é a data completa 
// (no padrão de Brasília, nesse cenário específico) 
// e o tipo da variável dataEHora é string.