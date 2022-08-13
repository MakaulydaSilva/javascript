// Some todos os números pares do array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) {
        acumulador += valor;
        }
    return acumulador;
}, 0);
console.log(total);

//O papel do reduce é transformar o array em um único valor