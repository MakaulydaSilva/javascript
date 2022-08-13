const pessoas = [
    { nome: 'Makauly', idade: 23 }, 
    { nome: 'Vitoria', idade: 20 }, 
    { nome: 'Margarete', idade: 42 }, 
    { nome: 'Pierre', idade: 0.9 }, 
    { nome: 'Marcelo', idade: 47 }, 
    { nome: 'Marciel', idade: 21 }, 
];

//Checa a quantidade de letras no nome
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 8);

console.log(pessoasComNomeGrande);
// Pessoas com mais de 20 anos
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 20);

console.log(pessoasMaisVelhas);

//Nomes que termina com a
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); 

console.log(nomeTerminaComA);