//            01234....
const nome = 'Luiz Otávio';

const nomes = ['Marcelo', 'Lucas', 'Marciel'];


for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);     //for classico
}

console.log('#####');
for (let i in nomes) {    // for in
    console.log([i]);
}

console.log('#####')

for (let valor of nomes) {
    console.log(valor);      // for of
}

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
})

const pessoa = {
    nome: 'Makauly',
    sobrenome: 'Pereira',
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]); // Para objetos como o de cima utilize o for in, o for of dara confilto por não ter indice como a string ou o array
}

// For Clássico - Geralmente com iteráveis (array ou strings)
// For  In - Retorna o índice ou chave (string, array ou objetos)
// For  of - Retorna o valor em si (iteráveis, arrays ou strings)