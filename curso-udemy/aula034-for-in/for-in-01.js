const frutas = ['Pera', 'Maçã', 'Uva']; //vetor = array de uma unica dimensão


/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
*/

for (let indice in frutas) {
    console.log(frutas[indice]); // for in -> lê os indices ou chaves do objeto
}