// apply()
// O método apply() funciona de forma semelhante ao call(), 
// porém recebe a lista de argumentos em um array:



function exibeMensagem(nome, email) {
    console.log(`Usuário: ${nome}, email: ${email}`)
}

const user = {
    nome: "Mariana",
    email: "m@m.com",
    executaFuncao: function(fn) {
        fn.apply(user, [this.nome, this.email]);
    }
}

user.executaFuncao(exibeMensagem);

// Usando arrays, é possível passar os argumentos via variável 
// ou até mesmo usando a propriedade arguments 
// que existe internamente em todo objeto.