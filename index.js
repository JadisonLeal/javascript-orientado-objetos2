import User from "./User02.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Mariana', 'm@m.com', '2021-01-01');

// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r.com.br', '2021-10-01');
// console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome);
novoAdmin.nome = 'André';
console.log(novoAdmin.nome);

const novoDocente = new Docente('Guilherme', 'g@g.com.br', '2021-01-01');
console.log(novoDocente.exibirInfos());