let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varAtemp = varA; // Reserva o valor de A pra ele não ser perdido;

varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);