//Global
function retornaFuncao(nome) { // Função pai
    // Função anonima
    return function() { // Esta função tem acesso a variavel do pai dela
         return nome;
    };
}

const funcao = retornaFuncao('Makauly');// Está acontecendo o closure, a variavel determinou o valor da função, ela está fechando o escopo
const funcao2 = retornaFuncao('José'); // A mesma coisa aqui, foi alterado o contexto léxico
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2()); //Closure é a habilidade que a função tem de acessar o seu escopo léxico