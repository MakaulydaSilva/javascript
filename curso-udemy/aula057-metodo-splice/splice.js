const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
const removidos = nomes.splice(3, 2, 'Luiz', 'Paulo') // Numero do indice, quantos serão deletados, é o que será adcionado
console.log(nomes, removidos);

//const removidos = nomes.splice(-2, Number.MAX_VALUE); // Aqui ele começara do -2(Gabriel) até o maximo de indices disponiveis

//nomes.splice(-1, 1); => simulando o .pop

//nomes.splice(0, 1); => simulando o shift

//nomes.splice(nomes.length, 0, 'Luiz', 'Pedro'); => simulando o push => A vantagem é que pode colocar mais indices

//nomes.splice(0, 0, 'Luiz', 'Pedro' ); => simulando o unshift, posso colocar varios indices no comeco do array
