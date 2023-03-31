//Factory Function 

function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome}  ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala: function (assunto = 'nada') {
            return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}, esta pessoa pesa ${this.peso} quilos.`
        },
        peso,
        altura,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 92, 1.80);
const p2 = criaPessoa('Zeca', 'Lando', 88, 1.60);
const p3 = criaPessoa('Lalau', 'Tulio', 60, 1.70);

console.log(p1.fala('JS'));
console.log(p2.fala('Comida'));

console.log(p1.imc);
console.log(p2.imc);

p1.nomeCompleto = 'Pierre Pereira da Silva'
console.log(p1.nomeCompleto);

console.log(p1.fala());

console.log(p3.imc);