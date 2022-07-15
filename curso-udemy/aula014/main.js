let num1 = 0.7; //number
let num2 = 0.1; //number

console.log(num1.toString() + num2); // valor temporario
// num1 = num1.toString(); // valor alterado pra string
console.log(typeof num1);
console.log(num1.toString(2)); //representação binaria
console.log(num1.toFixed(2)); // para fazer arredondamento do número
console.log(num1.toFixed(4));

console.log(Number.isInteger(num1)); // para verificar se um numero é inteiro

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // para verificar se a sua variavel realmente não é um numero

//IEEE 754-2008

//console.log(num1 + num2);

//num1 += num2; // num1 = num1 + num2
//num1 += num2;//0.9
//num1 += num2;//1.0
//num1 += num2;//1.1
//num1 += num2;//1.2
//num1 += num2;//1.3
//num1 += num2;//1.4
//num1 += num2;//1.5
//num1 += num2;//1.6
//num1 += num2;//1.7
//num1 += num2;//1.8
//num1 += num2;//1.9
//num1 += num2;//2.0

num1 = ((num1 * 100) + (num2 * 100)) / 100 //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100 //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100 //1.0

num1= Number(num1.toFixed(2)); // melhor maneira

console.log(Number.isInteger(num1));
console.log(num1);

console.log(num1.toFixed(2));