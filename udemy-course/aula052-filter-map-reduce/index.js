const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

    console.log(numerosPares);

//[50, 80, 2, 6, 22] pares
//[100, 160, 4, 12, 44] dobro dos pares
// 320 soma do dobro dos pares