const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(total);

const pares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(pares);

const dobrado = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(dobrado);

//------------------------------------------------------------

const pessoas = [
    { nome: 'Makauly', idade: 24 },
    { nome: 'Pierre', idade: 01 },
    { nome: 'Vitoria', idade: 20 },
    { nome: 'Margarete', idade: 43 },
    { nome: 'Marcelo', idade: 47 },
    { nome: 'Marciel', idade: 22 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);

const maisNova = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade < valor.idade) return acumulador;
    return valor;
});

console.log(maisNova);