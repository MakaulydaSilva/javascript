const produto = {nome: 'Caneca', preco: 15.90};
const outroProduto = {
    ...produto,
    material: 'Porcelana'
};

outroProduto.nome = 'Xicara';
outroProduto.preco = '2.5';
//produto.nome = 'Bandeja';
console.log(produto);
console.log(outroProduto);