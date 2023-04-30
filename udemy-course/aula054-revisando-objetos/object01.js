const pessoa = {
    nome: 'Pierre',
    sobrenome: 'Pereira',
};

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

//-----------------------------------------------------

const pessoa2 = new Object();

pessoa2.nome = 'Makauly';
pessoa2.sobrenome = 'Otávio';
pessoa2.idade = 24;
pessoa2.falarNome = function() {
    console.log(` Meu nome é : ${this.nome}.`);
}
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa2) {
    console.log(chave);
}

pessoa2.falarNome();

console.log(pessoa2.getDataNascimento());

delete pessoa2.sobrenome;

console.log(pessoa2);


