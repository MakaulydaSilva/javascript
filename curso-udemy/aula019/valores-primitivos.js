/*
Primitivos (imutaveis) - string, number, boolean , undefined, null (biginit, symbol) - Valores Copiados

*/

let a = 'A'
let b = a; //Copia

console.log(a,b);

a = 'Outra coisa'; 

console.log(a, b); // O valor de b foi copiado do de a mas eles nao se tornam a mesma coisa ao alterar o valor de a o b não perde o seu valor anterior