const produto = {nome: 'Caneca', preco: 20.70};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    //Alterei o valor
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

//Não serão alterados
produto.nome = 'Outra coisa';
delete produto.nome;