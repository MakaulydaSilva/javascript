 /*
 let a = 'A'; // B
 let b = 'B'; // c
 let c = 'C'; // A

 const letras = [b, c, a]; //Atribuição via desestruturação
 [a, b, c] = letras; 

 console.log(a, b, c);
 */

 /*
// ... rest, ...spread
 const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000 ];
 
 const [um, dois, tres, ...resto] = numeros;

 console.log(um, dois, tres);
 console.log(resto);
 */

 const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000 ];
 const  [um, ,tres, ,cinco, ,sete] = numeros;
 //console.log(um, tres, cinco);

 const numeros2 = [
 //       0          1          2
 //    0  1  2    0  1  2    0  1  2
      [1, 2, 3], [4, 5 ,6], [7, 8, 9],
 ];
const [lista1, lista2, lista3] = numeros2;

 console.log(numeros2[1][2]);

 console.log(lista2[1]);
