
// argumentos que sustenta todos os argumentos enviados
function funcao01 (a, b, c) {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}

funcao01( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//----------------------------------------------

//Seta os valores do parametros como undefined
function funcao02 (a, b, c, d, e, f) {
 console.log(a, b, c, d, e, f)
}
funcao02( 1, 2, 3);

//------------------------------------------------

// 1 + undefined = NaN
function funcao03 (a,b) {
 console.log(a + b);
}
funcao03(1);

//b assume um valor padrão, caso não seja enviado
function funcao04 (a, b = 2) {
 console.log(a + b);
}
funcao04(2);

//Somente para c não foi setado um valor então ele terá o valor que foi colocado no parametro
function funcao05 (a, b = 2, c = 4) {
 console.log(a + b + c);
}
funcao05(2, 10);

