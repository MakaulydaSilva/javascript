const produto = {nome: 'Caneca', preco: 15.90};
const outroProduto = Object.assign({}, produto, {material: 'Porcelana', asa: 'Aluminio'});

outroProduto.nome = 'Xicara';
outroProduto.preco = '2.5';
//produto.nome = 'Bandeja';
console.log(produto);
console.log(outroProduto);


