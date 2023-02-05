/*
  Referência (mútavel) - array, object, function
*/

let a = [1, 2, 3];
let b = a; //Neste caso tanto a quanto b estão apontando pro mesmo local da memória não é somente uma cópia

console.log(a, b);

a.push(4);

console.log(a, b); //Por estarem apontando no mesmo lugar na memória ambos terão o mesmo valor mesmo eu so alterando a  variável a

b.pop();

console.log(a, b); //Novamente as duas variáveis foram alteradas mesmo eu só mexendo na variável b

let c = b; //Possuo mais uma variável apontando pro mesmo local da memória

a.push(5);

console.log(c);

let d = [...a]; // Com o spread  o valor será só copiado mesmo sendo um valor mútavel

c.push(6);

console.log(a,b,c,d); //Somente a variável d não ganhou o novo índice no array, justamente porque ele foi somente copiada e não aponta pro mesmo local da memória das demais



//Funciona exatamente da mesma forma com objetos
const e = {
    nome: 'Zeca',
    sobrenome: 'Lineu'
};

const f = e;

console.log(f);

f.nome = 'João';

console.log(f, e); //Alterando um automaticamnte altero o outro 

