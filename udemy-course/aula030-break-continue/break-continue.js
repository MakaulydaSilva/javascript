const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2 || numero === 3) {
        console.log('Pulei o número 2 e 3.')
        continue;
    }

    console.log(numero);
    
    if (numero === 7) {
        console.log('7 foi encontrado, saindo...')
        break;
    }

}

// Com while

let i = 0;

while (i < numeros.length) {
    
    let numero = numeros[i];

    if (numero === 2 || numero === 3) {
        console.log('Pulei o número 2 e 3.');
        i++;
        continue;
    }

    console.log(numero);
    
    if (numero === 7) {
        console.log('7 foi encontrado, saindo...');
        i++;
        break;
    }

    i++;

}


