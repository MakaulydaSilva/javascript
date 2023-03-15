function funcao01({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = ({ nome: 'Pierre', sobrenome: 'Pereira', idade: 1 });

funcao01(obj);

//-------------------------------------------------

function funcao02([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

let array = (['Pierre', 'Pereira', 1]);

funcao02(array);

//-----------------------------------------------------

//Com o rest operator todo o resto que vier depois do operador estará dentro do parametro numeros
const conta = function(operador, acumulador, ...numeros) {
    // in mostra os indices e of mostra os valores do indice
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador += numero;
        if (operador === '/') acumulador += numero;
        if (operador === '*') acumulador += numero;
    }

    console.log(acumulador);
};

conta('*', 1, 20, 30, 40, 50);