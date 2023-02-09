const numero1 = 10;

if (numero1 >= 0) {
    console.log('Sim, o número é maior ou igual a zero.');
}

const numero2 = 6;

if (numero2 >= 0 && numero2 <= 5) {
    console.log('O número está entre 0 e 5.');
} else {
    console.log('O número não está entre 0 e 5.')
}

// O bloco if else, funciona da seguinte maneira, ele checa todas as condições a primeira que for encontrada e for avaliada como uma condição verdadeira ele á executa e todo o resto da condição é ignorado, ou seja ele precisa somente de uma condição verdadeira todo o resto mesmo que for verdadeiro também é ignorado, somente uma condição é executada sempre.
const numero3 = 9;

if (numero3 >= 0 && numero3 <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero3 >= 6 && numero3 <= 8) {
    console.log('O Número está entre 6 e 8.');
} else if (numero3 >= 9 && numero3 <= 11) {  //Verdadeiro
    console.log('O Número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}