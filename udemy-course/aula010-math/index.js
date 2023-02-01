let num1 = 9.54578; 

let num2 = Math.floor(num1); //Arredonda o número para baixo 

let num3 = Math.ceil(num1); //Arredonda o número para cima

let num4 = Math.round(num1); //Arredando o número, dependendo do valor do decimal mais ou igual a 50 arredonda pra cima menos arredonda pra baixo

console.log(num2);
console.log(num3);

//-----------------------------------------

let num5 = 4;
let num6 = 1600;
let num7 = -9;
let num8 = 7;
let num9 = 329;

console.log(Math.max(num5, num6, num7, num8, num9)); //Verifica o maior número

console.log(Math.min(num5, num6, num7, num8, num9)); // Verifica o menor número

//--------------------------------------------------------

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //Com esse cálculo o número aleatório vai ficar entre 10 e 5, com o Math.round eu deixo o número inteiro

console.log(aleatorio); //Retorna um número aleatório entre 0 e 1 , o 1 nunca é escolhido

//------------------------------------------------------------

console.log(Math.pow(2, 10)); //Eleva  um número faz exatamente a mesma coisa que o **

console.log(Math.PI); //Valor de PI

//-----------------------------------------------------------

let num10 = 25;

console.log(num10 ** 0.5); //Pega a raiz quadrada de um número

//------------------------------------------------------------

console.log(100/0); //Infinity -> isso acontece quando o motor percebe que nunca chegará proximo do zero absoluto então retorna esse valor, que é avaliado como true pelo javascript