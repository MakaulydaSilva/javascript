/*
* Aritméticos
* + => Adição / Concatenação
*   - / * 
*  '**' => Potenciação
* % => Retorna o resto da divisão
* () > ** > '*' '/' '%' > '+' '-' => Ordem de importância 
*/

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3); //Assim como na matemática divisão e multipliçacão tem preferência de cálculo. Fazendo dessa forma com os parênteses ele primeiro efetua a soma

let contador = 1;
++contador; //2
++contador; //3
++contador; //4
++contador; //5

//Pré contador primeiro faz a conta e depois retorna o valor, já o pós (contador++) executa a ação primeiro e depois ele faz o incremento do valor

let conta = 1;
console.log(conta++); //O console.log exibira o valor de conta primeiro que no caso é 1 e depois fará o cálculo 
console.log(conta) // Agora nesta linha conta já vale 2

let conta2 = 1;
console.log(++conta2); // Aqui o operador de incremento efetua o cálculo primeiro e depois o console.log mostra o resultado

let conta3 = 10;
console.log(--conta3);
console.log(--conta3); //Operador de decremento

let conta4 = 1;
contador++
console.log(contador); //Desta maneira não fará diferença se é pré ou pós incremento pos nesta linha o cálculo ja terá sido feito e o console.log mostrará o ressultado final

const passo = 50;
let contador2 = 0;
//contador2 = contador2 + passo;
//console.log(contador2);
//contador2 = contador2 + passo;
//console.log(contador2);
//contador2 = contador2 + passo;
//console.log(contador2);

//Operadores de atribuição
contador2 -= passo
contador2 *= passo
contador2 += passo // contador = contador + passo;

//NaN - Not a Number
const num4 = 10;
const num5 = 'Jeca';
console.log(num4 ** num5);
