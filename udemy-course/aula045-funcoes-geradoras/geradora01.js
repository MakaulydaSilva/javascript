function* geradora1() {
    //Código qualquer...
    yield 'Valor 1';
    //Código qualquer...
    yield 'Valor 2';
    //Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next( ).value);
console.log(g1.next( ).value);
console.log(g1.next( ));
console.log(g1.next( )); //done:true => acabou os valores yield

for (let valor of g1) {
    console.log(valor);
}