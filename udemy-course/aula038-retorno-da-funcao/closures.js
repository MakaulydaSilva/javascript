function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Pierre');
const funcao2 = retornaFuncao('Makauly');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());