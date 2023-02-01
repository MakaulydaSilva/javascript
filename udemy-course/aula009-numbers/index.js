//IEEE  753-2008 -> Padrão de números seguido pelo javascript

let num1 = 1; //Number
let num2 = 2.5; //Number
let num3 = 15000;
let num4 = 10.432429472498274927492749; //Number
let num5 = 10; //Number
let nan = num1 * 'Olá'; //NaN

console.log(num1.toString() + num2); //Somente aqui o num1 será string

num1.toString(); //Agora o num1 é definitivamente umnum1a string

console.log(num3.toString(2)); //Para ver a representação binaria

console.log(num4.toFixed(2))// Para arredondar números decimais, dentro das chaves colocamos quantas casas queremos mostrar neste caso 2

console.log(Number.isInteger(num5)); // Retornará se o número é inteiro ou não

console.log(Number.isNaN(nan));// Verifica se a váriavel é NaN

//----------------------------------------------------

let num6 = 0.7; //Number
let num7 = 0.1; //Number

num6 += num7; // num6 = num6 + num7;
num6 += num7; // 0.9
num6 += num7; // O resultado esperado seria 1.0, mas existe uma certa imprecisão do motor fazendo com que o resultado seja 0.999999~
num6 += num7; //1.1
num6 += num7; //1.2
num6 += num7; //1.3
num6 += num7; //1.4
num6 += num7; //1.5
num6 += num7; //1.6
num6 += num7; //1.7
num6 += num7; //1.8
num6 += num7; //1.9
num6 += num7; //2.0

num6 = num6.toFixed(2); // Fixo o valor para ele aparecer como inteiro, mas isso so acontecerá visualmente

num6 = Number(num1.toFixed(2)); // Agora aqui sim o problema será realmente corrigido

console.log(Number.isInteger(num6));

//Outra maneira de resolver esse problema

let num8 = 0.7;
let num9 = 0.1;

num8 = ((num8 * 100) + (num9 * 100)) / 100; // 0.8
num8 = ((num8 * 100) + (num9 * 100)) / 100; // 0.9
num8 = ((num8 * 100) + (num9 * 100)) / 100; // 0.1

console.log(num8);

console.log(Number.isInteger(num8));



