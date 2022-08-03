function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num); // Gera um numero aleatório entre os valores indicados
}


function f1(callback) {
    setTimeout(function() { // Este setTimeout é para simular algo que demoraria ou teria repostas diferentes dentro da web **
        console.log('f1');
        if (callback) callback();
    }, rand());
    
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand()); // rand gera esse numero aleatorio que seria o da web ou até um servidor
}
/*
f1(function() {
   f2(function() {
     f3(function() {
        console.log('Olá mundo!');
     });
   });
});
*/

f1 (f1Callback);  // ** E o callback hell ajusta este tempo conforme o código é escrito 
    
function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}



