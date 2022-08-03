// return
// Retorna um valor
// Termina a função

function soma(a, b) {
    return a + b; // Isso é oque ela retorna e também é o fim da função
}

function soma2(a, b) {
    console.log(a + b); //Isto não é retorno é oque se esta pedindo para função executar
}

soma2(5, 2);


// Função sem retorno, mas que executa uma ação
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});


function criaPessoa(nome,sobrenome) {
    return {nome, sobrenome};
}
// As duas variaveis são a mesma coisa a diferença é que na p1 os objetos já foram criados com a função então eu só adiciono o valor
const p1 = criaPessoa ('Makauly', 'Pereira');
const p2 = {
    nome:'Makauly',
    sobrenome: 'Pereira'
};

console.log(typeof p1);
console.log(typeof p2);


//Função dentro de função

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);