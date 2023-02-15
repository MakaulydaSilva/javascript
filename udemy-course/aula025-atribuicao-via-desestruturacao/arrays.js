//               0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// ... rest, ... spread
const [um, ,tres, ,cinco, ,sete] = numeros;

console.log(um,tres,cinco,sete);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros2;
console.log(lista2[0]);