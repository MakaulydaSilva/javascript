const pessoa1 = {  //Colchetes é array, chaves é objetos
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Poliana',
    sobrenome: 'Arruda',
    idade: 57
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

// Estou criando uma função que cria objetos, neste caso estou repassando o valor dos parâmetros como objetos
// O nome da função que cria objetos é factory
function criaPessoa(nome, sobrenome, idade) {//Parâmetro 
    return {
        nome,
        sobrenome: sobrenome, //Quando há 2 valores iguais eu não preciso repetir 2 vezes
        idade  //Fica dessa forma digitado somente 1 vez
    };
}

const pessoa3 = criaPessoa('Lucas', 'Teles', 33); //Argumentos(valor) que serão passados para o parâmetro
const pessoa4 = criaPessoa('Makauly', 'Pereira', 23);
const pessoa5 = criaPessoa('Marciel', 'Pereira', 22);
const pessoa6 = criaPessoa('Tiago', 'Saulo', 45);
const pessoa7 = criaPessoa('Junior', 'Brandão', 56);

console.log(pessoa3.nome, pessoa4.sobrenome, pessoa5.nome, pessoa7.idade);