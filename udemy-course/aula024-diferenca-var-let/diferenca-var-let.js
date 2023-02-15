const verdadeira = true;

let nome = 'Luiz'; // Criando
var nome2 = 'Luiz';
console.log(nome); //neste escopo global a variável let  tem um valor
// var nome2 = 'Makauly'; //Var pode ser redeclarada

// Let tem escopo de bloco { ...bloco }
// Var só tem escopo de função

if (verdadeira) {
    let nome = 'Otavio'; //Criando dentro deste bloco
    // console.log(nome, nome2);
    console.log(nome); //Dentro deste escopo de bloco a variável let tem outro valor
    if(verdadeira) {
        let nome = 'Outra coisa' //Foi criado outra variável let com mesmo nome, e ela funciona normalmente pois está dentro de um bloco separado das demais
        console.log(nome, nome2); //Ele procura a variável por blocos, como logo neste bloco já aparece uma é ela mesmo que é puxada
    }
}

//Farei o mesmo exemplo mas com var
var nome3 = 'Paulo' // Criando

if (verdadeira) { 
    var nome3 = 'Jesus'; //Redeclarando 
    
    if(verdadeira) {
        var nome3 = 'Zeca'; //Redeclarando, a variável pasa a ter este valor, as declaradas em cima passam a ter este valor não respeitando o escopo de bloco
        console.log(nome3);
    }
}

console.log(nome3); //Mesmo fora do escopo o valor desta variável é zeca, fazendo com que as que foram declaradas acima perda o valor



