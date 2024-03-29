// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'Original ' + this.nome + ' ' + this.sobrenome;
}

// instância 
const pessoa1 = new Pessoa('Luiz', 'Olavo.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'Ana.') // <- Pessoa = função construtora

//Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};


const data = new Date(); // <-- Date = função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);