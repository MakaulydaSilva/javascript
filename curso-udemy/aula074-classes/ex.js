class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} esta falando.`);
    }

    comer() {
        console.log(`${this.nome} esta comendo.`);
    }

    beber() {
        console.log(`${this.nome} esta bebendo.`);
    }
}

const p1 = new Pessoa('Makauly', 'Pereira');
const p2 = new Pessoa('Zeca', 'Tadeu');
const p3 = new Pessoa('Tulio', 'Malao');
const p4 = new Pessoa('Pondi', 'Teco');
const p5 = new Pessoa('Sulivan', 'Leao');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);

/////////////////////////////////////////

function Pessoa6(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa6.prototype.falar = function() {
    console.log(`${this.nome} está gostando de programar.`)
}

const p6 = new Pessoa6('Otavio', 'Auri');