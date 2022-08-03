const nome = 'Luiz';

function falanome() {
    console.log(nome); // É possivel usar uma variavel fora da função
}


function usaFalanome() {
    const nome = 'Pereira'; // Esta variavel não sera chamada e sim a variavel de valor Luiz, pois quando executo a função falanome dentro da usaFalanome ela lembrara onde ela foi delcarada e quais eram os vizinhos dela
    falanome();
}
usaFalanome(); // Ainda sim funciona a função busca a variavel da outra função que esta fora da mesma