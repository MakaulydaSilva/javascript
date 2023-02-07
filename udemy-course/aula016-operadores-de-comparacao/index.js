/**
 * Operadores de comparaçã0
 * > maior que
 * >=  maior ou igual a
 * < menor que
 * <= menor ou igual aq
 * == igualdade (valor) //Não utilize
 * === igualdade restrita (valor e tipo)
 * != diferente (valor) //Não utilize
 * !== diferente estrito (valor e tipo)
 * */

console.log(10 > 5); //True
console.log(10 > 10);//False
console.log(10 >= 10);//True
console.log(10 < 11); //True
console.log(10 <= 11); //True
console.log(11 <= 10); //False

const num1 = 10;
const num2 = 11;

console.log(num1 < num2); //True

const num3 = 20;
const num4 = 20;

console.log(num3 === num4); //True

console.log(num3 === num2); //False

console.log(num1 !== num4); //True, pois os valores são diferentes

console.log(num1 !== num2); //False, pois os valores são iguais