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
    console.log(numero(i));
    i++;
}






