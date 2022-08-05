// Função construtora -> objetos
// Funcção fabrica -> objetos
// Construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
    //Atributos privados ou métodos privados
    const id = 123456; //Variavel interna de dentro da função

    const metodoInterno = function() { // Function interna com a variavel

    };
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
       console.log(this.nome + ': sou um método')
    };
}

const p1 = new Pessoa('Makauly', 'Pereira'); // Não se pode esquecer de usar a palavra new
const p2 = new Pessoa('André', 'Arruda');

p1.metodo();