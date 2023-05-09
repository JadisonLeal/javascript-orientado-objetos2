// call()
// O método call() executa a função passando valores e parâmetros específicos 
// para serem usados como contexto do this. Ou seja, é possível atribuir 
// um this diferente do contexto atual ao executar a função.

// Um exemplo de uso de call() para especificar o contexto de this:

function exibeInfos() {
    console.log(this.nome, this.email);
}

const user = {
    nome: "Mariana",
    email: "m@m.com"
}

exibeInfos.call(user);  // Mariana m@m.com




