/*
function funcao() {
   console.log(arguments[10]);
}
funcao('Valor', 'Dado', 1, 2, 3, 4, 5, 6, 7, 8, 'Makauly');
*/

// Argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c) { 
   let total = 0;
   for (let argumento of arguments) {
    total += argumento;
   }

   console.log(total, a, b, c); // a, b , c sustenta os três primeiros valores do parametro abaixo o resto esta a cargo do arguments como não foi definido nenhum valor

}
funcao(1, 2, 3, 4, 5, 6, 7, 8,);


//Divergencia de parametros 
function funcao02(a, b, c, d, e, f) {
    
    console.log(a, b, c, d, e, f);
}
funcao02(1, 2, 3) ; // Como não foi enviado o valor aos parametros o js retorna o valor padrao undefined

//Argumentos são os valores enviados para os parametros


function funcao03(a = 14, b = 2, c = 6) { // Assumindo um valor ao parametro
    console.log(a + b + c);
}
funcao03(undefined, 2, 10); // Agora que b assumiu um valor, o valor de cima do parametro não é mais valido e sim este
// a recebe o valor undefined , assim o 2 sera b e o c sera 10


// Atribuição via desestruturação
function funcao04({nome, sobrenome, idade }) {
   console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Makauly', sobrenome: 'Pereira', idade: 23 };
funcao04(obj);


// Rest Operator 
function conta(operador, acumulador, ...numeros) { // rest operator(...) === todo o resto vai para um array
    for(let numero of numeros) { // of para os valores in para os indices
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*', 1 , 20, 30, 40, 50);

// Function expression
const conta02 = function(operador, acumulador, ...numeros) { // rest operator(...) === todo o resto vai para um array
    for(let numero of numeros) { // of para os valores in para os indices
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta02('*', 1 , 20, 30, 40, 50);



