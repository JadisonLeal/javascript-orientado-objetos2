// EcmaScript Modules, ou ESM
// Quando utilizamos o ESM, o mesmo processo de exportação de módulos 
// é feito com a sintaxe export ou export default e a importação com a 
// sintaxe import <nomeModulo> from ‘./caminho/arquivo.js’.

// Esta outra forma de lidar com a importação e exportação de módulos veio 
// com o famoso ES6 ou JS2015 e foi aos poucos sendo implementada para 
// funcionar nativamente nos navegadores com a ajuda de 
// bundlers como o WebPack, que fazem a “tradução” de métodos do 
// JavaScript mais moderno para garantir retrocompatibilidade.

// Hoje o ESM já funciona nativamente em todos os navegadores e passou a ter 
// suporte para Node a partir da versão 13 (no momento em que escrevemos este 
// conteúdo, o NodeJS está na versão 16.13.2). Mesmo assim, grande parte 
// das aplicações desenvolvidas com NodeJS ainda utiliza o formato 
// CJS de importação e exportação de módulos e as bibliotecas, pacotes e 
// frameworks estão em processo de substituição do CJS para o ESM.

// A sintaxe do ESM segue os exemplos abaixo. Para exportar funções, por exemplo:

export function soma(num1, num2) {
    return num1 + num2;
}
   
export function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
}

// Ou, alternativamente, para exportar somente a função multiplica() como default (padrão):
export default multiplica;

// Ou outra forma de exportar mais de uma função:
export { multiplica, soma };


// Para fazer a importação, seguem os exemplos:
import soma from './caminho/arquivo.js';

// Ou, no caso de mais funções exportadas a partir do mesmo módulo:
import { soma, multiplica } from './caminho/arquivo.js';

// É possível também importar de uma só vez todo o objeto exportado:
import * as operacoes from './caminho/arquivo.js';

// E importar da seguinte forma:
const soma = operacoes.soma(1, 2);
const multiplica = operacoes.multiplica(1, 2);

// Importante: para utilizar a sintaxe ESM com NodeJS é preciso incluir, no arquivo 
// package.json, a propriedade ”type”: “module” e sempre incluir 
// a extensão do arquivo .js nos caminhos de 
// importação - por exemplo import soma from ‘./caminho/arquivo.js’;

// Existe uma convenção no uso de ESM em projetos NodejS, que é utilizar a 
// extensão .mjs para distinguir quais arquivos são módulos, continuando
// com a extensão .js para os arquivos que não exportam módulos

// Conclusão
// O sistema CJS (CommonJS) foi desenvolvido para funcionar como o sistema 
// de exportação/importação de módulos do NodeJS.
// O ESM (EcmaScript Modules) foi desenvolvido para que o JavaScript 
// tivesse nativamente seu próprio sistema de módulos - estamos falando 
// do JavaScript interpretado nos navegadores.
// O NodeJS implementou o suporte ao ESM a partir da versão 13.