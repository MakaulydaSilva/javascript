/* 
Primitivos (imútaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor
*/

let nome = 'Makuly';
nome[0] = R; //A string não será modificada pois string é um valor imútavel
console.log(nome[0], nome);


let a = 'A';
let b = a; // tanto a variável a quanto a b recebem o valor de 'A';

console.log(a, b); //O que foi feito foi uma cópia, cada variável se mantém independente mas compartilhando o mesmo valor

a = 'Outra coisa'; //Somente o valor de a foi modificado

console.log(a, b);