// import User from './User02.js';

// export default class Admin extends User {
//     constructor(nome, email, nascimento, role = 'admin', ativo = true) {
//         super(nome, email, nascimento, role, ativo);
//     }

//     criarCurso(nomeDoCurso, vagas) {
//         return `Curso de ${nomeDoCurso} criado, com ${vagas} vagas.`;
//     }
// }


// const novoAdmin = new Admin('Jadison', 'j@j.com.br', '2020-01-01');
// console.log(novoAdmin.criarCurso('C#', 20));

// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());


import User from './User02.js';

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }


    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado, com ${vagas} vagas.`;
    }
}