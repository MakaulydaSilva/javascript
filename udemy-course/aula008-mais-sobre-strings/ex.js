let string = 'Estou aprendendo a programar em javascript, espero que de tudo certo.';

let string2 = `${string} Estou fazendo um teste.`

console.log(string.replace('programar' , 'desenvolver'));

console.log(string.length);

console.log(string.slice(-6, -1)) //Peguei somente a palavra 'certo'

console.log(string.slice( 0, 69 )); //Toda a string

console.log(string.indexOf('j'));

console.log(string.indexOf('t', 9));

console.log(string.slice(32, 42)); //Peguei a palavra javascript achando o indice de j e t pelo indexOf;

console.log(string.lastIndexOf('o', 60));

console.log(string.lastIndexOf('e', 45));

console.log(string.slice(44, 50)); // Peguei a palavra 'espero' usando o lastIndexOf

console.log(string.search('j')); // Procuro o indice específico

console.log(string.split(' ')); //Transofrmo a strin em array;


console.log(string2);

console.log(string2.length);

console.log(string2.indexOf('j'));

console.log(string2.slice(44, 50)); //A string funciona mesmo dentro de outro algoritmo

console.log(string2.charAt(91));

console.log(string2.search(/j/));