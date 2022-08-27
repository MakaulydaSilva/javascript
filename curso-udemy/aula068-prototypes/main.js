// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instância 
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.') // <- Pesso = função construtora

Pessoa.prototype.estouAqui = "hahahaha";

const data = new Date(); // <-- Date = função construtora

console.dir(pessoa1);
console.dir(data);