/**
 * && -> false && true -> false "O valor mesmo"
 * 
 * FALSE 
 * *false
 * 0
 * '' -> String vazia
 * null / undefined
 * NaN
 * 
 * Qualquer coisa que não seja essas acima é retornado como true
 */

//Fazendo a chegagem e vendo que todos os valores são verdadeiros será retornado o último valor neste caso José
console.log('Makauly' && true && 'José' );

//Quando tiver um valor false ele sera retornado, mesmo que tenha 50 valores que seja avaliado como true mas pra frente o código aqui é parado e é retornado o valor false, neste caso o NaN
console.log('Pereira' && 'Juca' && NaN);

function falaOi () {
    return 'Oi';
}

let executa; //undefined

//A função não será executada pois o primeiro valor é avaliado como false
console.log(executa && falaOi());

function falaOla () {
    return 'Olá';
}

let teste = 'Verdadeiro'; //String com valor (sem estar vazia) -> true

//Aqui a função funciona normalmente pois avalia um valor verdadeiro e depois outro, e exibi o último valor a ser avaliado 
console.log(teste && falaOla());