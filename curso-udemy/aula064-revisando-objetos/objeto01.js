const pessoa = {
    nome: 'Makauly',
    sobrenome: 'Pereira',
};

const chave = 'nome';
console.log(pessoa[chave]);
//---------------------------------------------
const pessoa1 = new Object();
pessoa1.nome = 'Mauricio';
pessoa1.sobrenome = 'Silva';


console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//---------------------------------------------------
const pessoa2 = {
    nome : 'Mauricio',
    sobrenome: 'Silva',
}

console.log(pessoa1, pessoa2);