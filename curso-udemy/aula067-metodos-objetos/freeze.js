const produto = {nome: 'Caneca', preco: 20.70};
//Não podera altera mais nada do obejto
Object.freeze(produto);
produto.nome = 'Nao vai funcionar'
const caneca = {nome: produto.nome, preco: produto.preco};

console.log(produto);