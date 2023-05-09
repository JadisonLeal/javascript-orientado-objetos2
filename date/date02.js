// Em outro cenário, suponhamos que você decida utilizar a mesma 
// variável dataEHora para guardar a informação 
// da data mas, diferentemente do primeiro caso onde você 
// chamou apenas o método Date() para recuperar
// a informação, você agora crie uma instância do objeto Date.


let dataEHora = new Date(); // utilizando o construtor do objeto Date
console.log(dataEHora);
// 2023-04-12T19:56:51.316Z
console.log(typeof dataEHora);
 // object


// A informação então recuperada é a mesma mas os tipos são diferentes. 
// Mas qual o propósito disso?

// A razão por trás desse comportamento é que, quando utilizamos um
// construtor, também temos acesso a todos os métodos do objeto Date. 
// Podemos ver melhor essa diferença nos exemplos a seguir:


let dataComConstrutor = new Date();
let data1 = dataComConstrutor.getDate();
console.log(data1); //12


// Acima, utilizamos o método getDate(), 
// que já existe em qualquer objeto criado 
// a partir de Date(), para obter o dia do mês.


let dataFuncao = Date();
let data2 = dataFuncao.getDate(); //TypeError: dataFuncao.getDate is not a function


// Já no exemplo acima, vemos que uma data gerada através da chamada da função Date() 
// diretamente não pode acessar os demais métodos do objeto Date, ao passo que 
// ao gerarmos uma nova instância desse objeto é possível acessar todos 
// os métodos definidos dentro deste objeto, como por exemplo getDate().


// Alguns exemplos de outros métodos disponíveis no objeto Date são:

// .getMillisseconds()
// .getSeconds()
// .getMinutes()
// .getHours()
// .getDay()
// .getMonth()
// .getFullYear()