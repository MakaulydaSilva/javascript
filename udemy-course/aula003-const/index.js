// A constante precisa ser criada e inicializada ao mesmo tempo

const nome = 'Pedro';
console.log(nome);

//nome = 'João'; --> Isto está errado, o valor de uma constante não pode ter seu valor modificado

// + - * /
const primeiroNumero = '5'; // String
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; // Valor inicial foi perdido
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero + segundoNumero)); //typeof() --> identifica o tipo da variável

var nome2 = 'Luiz';
var nome2 = 'Maria'; //Com var a variavel pode ser redeclarada, por isso desde o ES6 foi criado o let que não permite isso