/*
Referência (mutável) - array, object, functio = Valores passados por referência
*/

let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);


b.pop();

console.log(a, b); //a e b apontam para o mesmo valor da memoria, alterando o dado de um você altera o do outro

c.push('luiz');

console.log(a, b, c);// c tambèm ganhara o mesmo valor, e alterando ele você altera os outros valores recebidos como iguais

let d = [...c]; //Aqui o valor será somente copiado

d.push('José') // e quando colocar valor , não irá afetar os outros, pois o comando foi para ser copiado

console.log(a, b, c, d); //Somente d está com um valor a mais, pois ele é independente dos outros valores