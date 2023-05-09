const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}


const admin = {
    nome: "Mariana",
    email: "m@m",
    nascimento: "2021-01-01",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log('Curso criado!')
    }
}

// usando esse metodo de Object o admin herda um metodo de user
Object.setPrototypeOf(admin, user); //admin tem que ser passado em primeiro como parametro por que ele que vai herdar de user



admin.criarCurso();
admin.exibirInfos();