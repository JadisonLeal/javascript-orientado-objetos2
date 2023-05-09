const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021-01-01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

// user.exibirInfos();
// const exibir = user.exibirInfos;
// exibir();   

const exibir = function() {
    console.log(this.nome);
}

const exibirNome = exibir.bind(user); //exibir agora está atrelada a user e pode ser chamada as propriedades através de exibirNome

exibir(); // undefined
exibirNome(); //Juliana

// lembrando que exibirNome não sobrepoes exibir e sim vira uma cópia 


// Durante as aulas usamos bind() para ligar (bind) 
// o valor de this a um determinado contexto. 
// Existem outros dois métodos para 
// manipular o contexto de this: