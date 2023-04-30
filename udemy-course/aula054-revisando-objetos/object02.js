// Factory functions / Constructor functions // Classes

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Pierre', 'Da Silva');

console.log(p1.nomeCompleto);

//-----------------------------------------------------

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); -> dessa forma nenhum valor será alterado, mas isso pode ser perigoso para o seu código (também funciona com array)
}

// {} <- this -> this 
const p2 = new Pessoa('Luiz', 'Miranda');
p2.nome = 'Vitoria';     // p2 = (ENDERECOMEMORIA) -> 'Valor'
p2.sobrenome = 'Carolina';

Object.freeze(p2);

p2.nome = 'Teste'; //Por causa do Object.freeze o valor do objeto não será mais alterado
p2.sobrenome = 'Teste'

const p3 = new Pessoa('Makauly', 'Pereira');

console.log(p2);