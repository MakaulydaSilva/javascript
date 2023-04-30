const jogos = [
    { nome: 'God of War', lancamento: 2004 },
    { nome: 'Halo', lancamento: 2001 },
    { nome: 'Assassins Creed', lancamento: 2007 },
    { nome: 'Gta San Andreas', lancamento: 2004 },
    { nome: 'Mario', lancamento: 1981 },
    { nome: 'Minecraft', lancamento: 2010 },
    { nome: 'Pokemón', lancamento: 1996 },
    { nome: 'Zelda', lancamento: 1982 },
    { nome: 'Diablo 2', lancamento: 2000 },
];

// Qual o jogo mais velho do array ?

const jogoMaisVelho = jogos.reduce((acumulador, valor) => {
    if (acumulador.lancamento < valor.lancamento) return acumulador;
    return valor;
});

console.log(jogoMaisVelho);

// Qual o jogo mais novo do array ?

const jogoMaisNovo = jogos.reduce((acumulador, valor) => {
    if (acumulador.lancamento > valor.lancamento) return acumulador;
    return valor;
});

console.log(jogoMaisNovo);

//Jogos lançados depois dos anos 2000

const jogosDe2000 = jogos.filter(obj => obj.lancamento >= 2000);

//Somente os nomes dos jogos

const nomesJogos = jogos.map(obj => obj.nome);

console.log(nomesJogos);



