/*
Operadores Lógicos
&& -> AND -> E Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/
const expressaoAnd = true && true && false && true;
console.log(expressaoAnd);

const expressaoOr = true || false || false || false; // Se uma das expressões forem true resultado será sempre true, somente se todas as expressões forem falsas o resultado será falso
console.log(expressaoOr);

const usuario = 'Luiz'; //form que o usuario digitou
const senha = '123456'; //
//                       true        &&      false      = false
 const vaiLogar = usuario === "Luiz" && senha === '12345'; //Senha foi digita errado neste caso o resultado será falso
console.log(vaiLogar);


console.log(!true); // Esta expressão nega uma afirmação, neste caso o verdadeiro é falso