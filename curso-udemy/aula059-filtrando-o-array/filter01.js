//Filter -> Sempre vai sempre retornar um array, com a mesma quantidade de elementos ou menos.

const numero = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
function callbackFilter(valor) {
    return valor > 10;
}
*/

/*
const numeroFiltrados = numero.filter((valor, indice, array) => { 
    console.log(valor, indice,);
    return valor > 10;
});
console.log(numeroFiltrados);
*/

const numeroFiltrados = numero.filter(valor => valor > 10
);
