const pessoa = {

    nome: 'Makauly',
    sobrenome: 'Pereira', // Objetos
    idade: 23,
    endereco: {
        rua: 'Oscar Martins',
        numero: 30,
    }

};

//const nome = pessoa.nome; // Atribuição normal

//const { nome, sobrenome, endereço } = pessoa; // Atribuição via desestruturação

//console.log(endereço);

const {endereco: {rua: r, numero}, ...resto} = pessoa;

console.log(r, numero);