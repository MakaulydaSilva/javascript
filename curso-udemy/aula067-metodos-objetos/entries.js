//Retorna o objeto em  arrays
const produto = {nome: 'Caneca', preco: 20.70, material: 'Porcelana', asa: 'Aluminio' };

//console.log(Object.entries(produto));

for(let entry of Object.entries(produto)) {
    console.log(entry);
}
//for(let [chave, valor] of Object.entries(produto)) {
//    console.log(chave, valor);
//}
