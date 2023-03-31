function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    };
}

const p1 = criaPessoa('Pierre', 'Pereira');

console.log(typeof p1);

//------------------------------------------------------------

function falaFrase(comeco) {
    function falaResto(resto) {

        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');

console.log(resto);

//------------------------------------------------------------

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4 );

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));