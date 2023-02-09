/**
 *  || => true || false -> vai retornar o "valor verdadeiro"
 */

//Retorna o primeiro valor verdadeiro encontrado, neste caso a string 'Makauly'
console.log(0 || false || null || 'Makauly' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

//Irá retornar o primeiro valor verdadeiro encontrado neste caso será a string 'preto', caso seja alterado o valor de corUsuario para uma string, passar a retornar este valor pois ele passa a ser verdadeiro, se não modificar nada o valor fica como null e null é false, fazendo com que mostre o valor seguinte
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; //Valor retornado como true, pois é uma string
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //Será exibido o valor do algoritmo c com a string 'false'