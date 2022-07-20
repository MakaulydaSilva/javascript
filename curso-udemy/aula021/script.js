/*
Operadores de comparação
>  maior que
>= maior que ou igual a
<  menor que
<= menor que oi igual a
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)
*/
const comp = 10 > 5;
console.log(comp);

const comp2 = 10 >= 5; //10 >= 11 = false
console.log(comp2);

const comp3 =  10 < 11;
console.log(comp3);

const comp4 = 10 <= 11; // 12 <= 11 = false
console.log(comp4);

const num1 = 10;
const num2 = 12;
const num3 = 10;

const test1 = num1 < num2;
const test2 = num1 > num2;

console.log(test1);
console.log(test2);

const test3 = num1 === num3; // se for igual sera true, se for diferente sera false
console.log(test3);

const test4 = num1 !== num2; // se for igual sera false, se for diferente sera true
console.log(test4);

