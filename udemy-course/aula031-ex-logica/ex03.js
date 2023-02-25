let numero = (x) => {

    if (Number(x)) {
        if (x % 3 === 0 && x % 5 === 0) {
            return 'BuzzFizz';
        } else if (x % 3 === 0) {
            return 'Fizz';
        } else if (x % 5 === 0) {
            return 'Buzz';
        } else {
            return x;
        }
    } else return x;
}

let i = 0;

while (i <= 100) {
    console.log(i , numero(i));
    i++;
}

//Exercício professor

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++ ) {
    console.log(i, fizzBuzz(i));
}






