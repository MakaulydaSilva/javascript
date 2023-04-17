// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter( (valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});

console.log(numerosFiltrados);