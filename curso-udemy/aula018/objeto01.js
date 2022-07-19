function criaPessoa (nome, sobrenome, idade) { //Parametros
    return {
        nome,
        sobrenome, 
        idade,
    };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Tobias', 'Junior', 25); //Argumentos
const pessoa3 = criaPessoa('Levi', 'Pereira', 25);
const pessoa4 = criaPessoa('Andre', 'Silva', 25);
const pessoa5 = criaPessoa('Nilo', 'Santos', 25);

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade);