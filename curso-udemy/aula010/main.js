/**
 * 
 * Aritméticos
 *  +  Adição / Concatenação
 *  -  Subtração
 *  /  Divisão
 *  *  Multiplicação
 *  ** Potenciação
 *  %  Resto da divisão
 *  () Tudo que estiver entre parenteses será executado primeiro
 *     
 *    Ordem de execução
 * 1º ()
 * 2º **
 * 3º *, /, %
 * 4º +, -
 * 
 * Incremento = ++
 * Decremento = --
 */

const num1 = 5;
const num2 = 10;
const num3 = 15;
const num4 = 27;
const num5 = '9';
const num6 = 10;
const num7 = 3;
console.log(num1 + num2);
console.log(num4 / num2);
console.log(num3 * num1);
console.log(num1 - num4);
console.log(num5 + num2); // Como a const num5 é uma string o resultado sera 910 pois concatenou os valores
console.log(num1 ** num2);
console.log(num6 % num7);
console.log(num2 % num1); // Valor ficou em 0 pois a divisão é exata sem resto
console.log(num1 + num2 + num4 - num6);
console.log(num1 + num2 * num3);
console.log((num1 + num2) *num3); // A prioridade foi dada no que está dentro de parenteses
console.log(num1 * num2 / num3);

let contador = 1;
contador++; // Aqui eu quero q a variavel tenha o valor dela mais ela, nesse caso será 2
contador++; //3
contador++ //4
contador++ //5
contador++ // Esse valor pode ser antes ou depois (++contador) nesse caso ele incrementa primeiro o valor, depois mostra o resultado
console.log(contador)

let Menos = 10;
Menos--;
console.log(Menos);

// Operadores de atribuição
let passo2 = 0;

passo2 += 2;
passo2 += 2;
passo2 += 2;
passo2 += 2;

console.log(passo2);

let Multiplicação = 2;
Multiplicação *= 2;
Multiplicação *= 2;
Multiplicação *= 2;
Multiplicação *= 2;
console.log(Multiplicação);

let Potenciação = 3;
Potenciação **= 10;
console.log(Potenciação);


//NaN = Not a Number , sempre que ver isso se deve a algum erro com a conta, possivelmente misturou-se string com number

const number1 = 10;
const number2 = parseInt('5'); // parseInt() = estou pedindo pra transformar a string em number, se tornará um numero inteiro
console.log(number1 * number2);
console.log(typeof number2);

const number3 = 15;
const number4 = parseFloat('4.6'); // parseFloat() = Esta funciona da mesma maneira da de cima mas ela servirá para numeros flutuantes que são os numeros decimais
console.log(number3 + number4);

const number5 = 70;
const number6 = Number('8.8'); // Neste caso ele mostrará o número exato da string sendo decimal ou inteiro
console.log(number5 + number6);





