//Escreva uma função que recebe 2 numeors e retorne o maior deles

function max (x, y) {
   
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(10, 22));


// Melhorias (otimização do código)

function max (x, y) {
   
    if (x > y) {
        return x;
    }  // (SEM O ELSE) = Se a primeira condição for verdadeira o return será executado e saira da função, caso contrario ele sairá da função e ja retornara o y, pois só temos 2 opções
        return y;
}

console.log(max(10, 22));

//---------------------------

function max (x, y) {
   
    if (x > y) return x; return y; // Como só existe 2 condiçoes possiveis é possivel deixar tudo em só uma linha
}

console.log(max(10, 22));

//-------------------------------

function max (x, y) {
   return x > y ? x : y; // Condição ternária
}

console.log(max(10,22));

//-----------------------------

const max2 = (x, y) => x > y ? x : y; // Arrow function, tudo na mesma linha

console.log(max2(30,77));
