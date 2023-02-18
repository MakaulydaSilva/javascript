const nome = 'Pierre Pereira';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);       //For classico
}

for (let i in nome) {
    console.log(nome[i]);      // For in
}

for (let valor of nome) {
    console.log(valor);    //For of
}

const nomes = ['Pierre', 'Makauly', 'Vitoria'];

for (let valores of nomes) {
    console.log(valores);      //O for of retorna diretamente o valor, diferente do for in que além do valor também pode exibir o índice
}

nomes.forEach(function(valor, indice, array) {
     console.log(valor, indice, array);
});

//For clássico - Geralmente com iteráveis (array ou strings)
//For in - Retorna o ímndice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)