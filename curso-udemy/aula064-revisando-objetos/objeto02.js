const pessoa1 = new Object();

pessoa1.nome = 'Makauly';
pessoa1.sobrenome = 'Pereira';
pessoa1.idade = 23;

//delete pessoa1.nome; // apago uma chave do objeto

pessoa1.falarNome  = function() {
    return (`${this.nome} está falando seu nome.`)
};

pessoa1.getDataNasc = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

//console.log(pessoa1.falarNome());
//console.log(pessoa1.getDataNasc());

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

//FUNCTIONS dentro de objetos são chamados de métodos 