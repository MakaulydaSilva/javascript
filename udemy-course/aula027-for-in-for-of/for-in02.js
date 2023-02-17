const filho = {
    nome: 'Pierre',
    sobrenome: 'Pereira',
    idade: 1,
    anoNasc: 2021,
    mesAniversario: 'Outubro',
    CidadeNasc: 'Itapevi',
};

for (indice in filho ) {
    console.log(indice, filho[indice]);
}

const chave = 'sobrenome'; //Salvo a chave em uma variável

console.log(filho[chave]);