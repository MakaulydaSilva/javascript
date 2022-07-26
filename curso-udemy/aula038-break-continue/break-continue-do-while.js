const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('pulei o nuemro 2');
        i++;
        continue;
    }


    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }
   
    i++;
} while (i < numeros.length);

// Continue continua para a próxima iteração
// Break sai do laço