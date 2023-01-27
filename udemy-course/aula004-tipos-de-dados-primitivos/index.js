// String, Number, Undefined, Null, Boolean

const nome = 'Makauly'; //String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Undefined -> Não aponta para local nenhum da mémoria
let sobrenomeAluno = null; // Nulo -> Não aponta para local nenhum da mémoria
const aprovado = false; // Boolean -> true, false (lógico)

console.log(typeof aprovado, aprovado);

const a = [1, 2];
const b = a;

console.log(a , b);

b.push(3); //Ambos apontam para o mesmo valor na memória

console.log(a, b);

let c = 2;
let d = c; // O valor de c foi copiado para o valor de d, ambos possuem o mesmo valor agora

console.log(c, d); // 2, 2

c = 3;  // c recebe outro valor, mas d continua sendo 2 pois somente o valor de c foi alterado

console.log(c, d) //3, 2;