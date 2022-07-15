let num1 = 9;
//let num2 = Math.floor(num1);  // arredonda pra baixo
//let num2 = Math.ceil(num1);   // arredonda pra cima
// let num2 = Math.round(num1); arredonda para o cima caso o segundo numero decimal passe da metade (9.5= 10), ou para baixo (9.4= 9)
console.log(Math.max(1,2,3,4,-10,-50,15000,7,643346,90)); // mostra o maior numero da sequencia
console.log(Math.min(1,2,3,4,-10,-50,15000,7,643346,90)); // mostra o menor numero da sequencia
const aleatorio = Math.round(Math.random() * (10 -5) + 5); // mostra um numero aleatorio entre 5 e 10

//console.log(Math.PI); // mostra o numero pi

console.log(num1 ** 0.5);// mostra a raiz quadrada de um numero

console.log(!!(100 / 0)); // infinito