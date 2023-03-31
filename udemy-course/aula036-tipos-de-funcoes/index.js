// Declaração de função (Function hoisting)
falaOi(); //function hoisting

function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe);
// Function expression

const souUmDado = function() {
    console.log('Soum um dado.');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();