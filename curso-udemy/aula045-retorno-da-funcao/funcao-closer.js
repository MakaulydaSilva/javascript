/*
function duplica(n) {
   return n * 2;
}

function triplica(n) {
    return n * 3;
 }

 function quadriplica(n) {
    return n * 4;
 }
*/
function criaMultiplicador(multiplicador) {
   return function(n) {
      return n * multiplicador;
   };

}

let duplica = criaMultiplicador(2);
let triplica = criaMultiplicador(3);
let quadriplica = criaMultiplicador(4);

console.log(duplica(10));
console.log(triplica(20));
console.log(quadriplica(10));