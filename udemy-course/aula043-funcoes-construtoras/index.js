//Função construtora -> objetos
// Construtora -> Pessoa (new) {}

function Pessoa(nome, sobrenome) {
    //PRIVADOS
    const iD = 123456;

    const metodoInterno = function() {
          
    };
    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + 'é o Meu filho.')
    };
}

const p1 = new Pessoa('Pierre', 'Pereira');
const p2 = new Pessoa('Makauly', 'Pereira');

console.log(p2.nome);
p1.metodo();