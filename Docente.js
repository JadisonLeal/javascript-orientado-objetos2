import User from './User02.js';

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarAluno(estudante, curso) {
        return `${estudante} passou no curso de ${curso}`;
    }
}



// const novoDocente = new Docente('Juliana', 'j@j.com', '2012-01-01');
// console.log(novoDocente);
// console.log(novoDocente.exibirInfos());
// console.log(novoDocente.aprovarAluno('Jadison', 'JavaScript'));