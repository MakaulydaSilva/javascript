//Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Makauly', idade: 23 }, 
    { nome: 'Vitoria', idade: 20 }, 
    { nome: 'Margarete', idade: 42 }, 
    { nome: 'Pierre', idade: 0.9 }, 
    { nome: 'Marcelo', idade: 47 }, 
    { nome: 'Marciel', idade: 21 }, 
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);

//Reduziu o array em um elemento só


