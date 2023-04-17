const pessoas = [
    { nome: 'Makauly', idade: 24 },
    { nome: 'Pierre', idade: 01 },
    { nome: 'Vitoria', idade: 20 },
    { nome: 'Margarete', idade: 43 },
    { nome: 'Marcelo', idade: 47 },
    { nome: 'Marciel', idade: 22 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 30);

const NomeTerminaComE = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('e');
});

const NomeComecaComM = pessoas.filter(obj => {
    return obj.nome.toLocaleUpperCase().startsWith('M');
});

console.log(pessoasComNomeGrande);
console.log(pessoasMaisVelhas);
console.log(NomeTerminaComE);
console.log(NomeComecaComM);

