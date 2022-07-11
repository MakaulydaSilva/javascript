// Não podemos criar constantes com palavras reservadas 

// Constantes precisam ter nomes significativos, 

//Não pode começar o nome de uma constante com número

//Não podem conter espaços ou traços

//Utilizamos camelCase

//Case-sensitive

//Não pode modificar o valor de uma constante

//NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'João';
console.log(nome);

//Sempre coloque valor na constante, ela não pode inicializar estando nula

// + - * /

//String = Text | Number = Número
const primeiroNumero = '5'; // String
const segundoNumero = 10; // Number
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero + segundoNumero);
// como o 5 é uma string o sinal de mais ao invés de fazer a soma, ele concatenou 5 com 10 dando o resultado de 510


console.log(typeof (primeiroNumero + segundoNumero));







