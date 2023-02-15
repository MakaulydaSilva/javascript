const pessoa = {
    nome: 'Klark',
    sobrenome: 'Kent',
    idade: 32,
    endereco: {
        rua: 'Rua Ouro Fino',
        numero: 45,
    }
};
// Atribuição via desestruturação
const { nome: novoNome, sobrenome, idade, naoExiste = 'Posso criar desta maneira' } = pessoa;

console.log(novoNome, sobrenome, naoExiste);

const {endereco: {rua: r = 'Nova Rua', numero}, endereco} = pessoa;

console.log(r, numero, endereco);

const {nome, ...resto} = pessoa;
console.log(nome, resto);