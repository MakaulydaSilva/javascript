function* geradora1() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora2() {
    yield* geradora1(); //Esta usando a geradora1
    yield 3;
    yield 4;
    yield 5;
}

const g2 = geradora2(); //geradora2 herdou os valores da geradora1
for(let valor of g2) {
    console.log(valor);
}


function* geradora3() {
    yield function() {
        console.log('Vim do y1');
    };
    
     return function() {
        console.log('Vim do return'); //Função acaba
     }
    //...

    yield function() {
        console.log('Vim do y2'); // Essa função não ira mais funcionar por causa do return 
    }
}

const g3 = geradora3();

const func1 = g3.next().value
const func2 = g3.next().value

func1();
func2();
