const nomes = ['Pierre', 'Makauly', 'Vitoria', 'Marcelo', 'Margarete', 'Marciel'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

//pop  => nomes.splice(-1, 1);                               substitui os array   
const removidos = nomes.splice(-2, 2, 'Luiz', 'Xandão');  //Number.MAX_VALUE => Maior valor do js

//shift
const removidos02 = nomes.splice(0, 1);

//push
const adciona = nomes.splice(nomes.length, 0, 'Marley', 'Urley');

//unshift
const adciona02 = nomes.splice(0, 0, 'Abreu', 'Golias');

console.log(nomes, removidos);