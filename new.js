// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;
//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`;
//     }
// }

// const novoUser = new User('Jadison', 'j@j.com');
// console.log(novoUser.exibirInfos());


// function Admin(role) {
//     User.call(this, 'Jader', 'j@j.com')
//     this.role = role;
// }

// Admin.prototype = Object.create(User.prototype);
// const novoAdmin = new Admin('ADM');
// console.log(novoAdmin.role);
// console.log(novoAdmin.exibirInfos());


const user = {
    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfos: function() {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init('Juliana', 'j@j.com');
console.log(novoUser.exibirInfos());