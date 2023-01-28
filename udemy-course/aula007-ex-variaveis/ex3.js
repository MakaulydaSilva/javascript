let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]; //Aqui inverte o valor das variáveis sem criar um novo algoritmo 

console.log(varA, varB, varC);