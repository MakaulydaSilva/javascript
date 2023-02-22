//Escreva uma função que recebe 2 números e retorn o maior deles

function maiorNumero(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

const maior = maiorNumero(-90000, -900);

console.log(maior);

// Função do professor com melhorias (refatorada)

const max = (x, y) => x > y ? x : y;

console.log(max(38, 40));