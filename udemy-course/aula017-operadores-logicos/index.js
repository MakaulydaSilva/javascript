/**
 * Operadores Lógicos
 * && -> AND -> E
 * || => OR -> OU
 * ! => NOT -> NÃO
 */
const expressaoAnd = true && true && false && true;
console.log(expressaoAnd); //Se uma expressão for avaliada como false todas serão false, somente com todas como true a checagem retornara true

const expressaoOr = false || false || false || false || true; // O or depende somente de uma expressão retornar true, retornará false somente se todas as expressões forem false

const usuario = 'Makauly';
const senha = '123456';

//                             True        False                
const vaiLogar = usuario === 'Makauly' && '12345'; 
console.log(vaiLogar); //False


//Uma negação inverte o valor, 2 retorna o valor ao normal
console.log(!true); //False

console.log(!false); // True

console.log(!!false); //False

console.log(!!true); //False