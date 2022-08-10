function* geradora1() {
    // Código qualquer ....
    yield 'Valor 1';
     // Código qualquer ....
     yield 'Valor 2';
      // Código qualquer ....
    yield 'Valor 3';
}

const g1 = geradora1();
/*
//Verifica cada valor 
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());// done: true
*/

//O for sabe exatamente quando essa função termina
for  (let valor of g1) {
    console.log(valor)
}


function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;  //Laço infinito
    }
}

const g2 = geradora2();
console.log(g2.next().value); //Estou pegando o valor
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value); // Gerador infinito
