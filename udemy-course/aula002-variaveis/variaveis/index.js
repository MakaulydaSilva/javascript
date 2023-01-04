let nome = 'Tobias'; // String

console.log( nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

let varSemValor; // Você pode declarar uma variavel sem colocar valor a ela, para reservar a variavel
console.log(varSemValor); // A variavel sem valor tera como resultado o undefined

varSemValor = 'Daniel' // Agora eu iniciei a minha variável, dando um valor de string pra ela

console.log(varSemValor);

varSemValor = 'Kevin'; // A variável agora passa a ter outro valor
console.log(varSemValor);

//let nome; --> Não se pode redeclarar uma variável

//Não podemos criar variáveis com palavras reservadas 
// Exemplo --> let console, let if, let true

// Não se pode começar uma variável vom um número, e também nem traços ou espaços

//Se utiliza camelCase

let exemploDeAlgoritmoEmCamelCase;

//Case-sensitive,  letras maiusculas tem diferenças de minusculas pro motor do JS

//Exemplo

let nomeCliente = 'Makauly';
let nomecliente = 'Pereira';

console.log(nomeCliente, nomecliente);