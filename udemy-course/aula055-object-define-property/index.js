// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Para exibir o valor (mostra a chave)
        value: estoque, // Valor da chave
        writable: false, // Se posso ou não alterar o valor, neste caso não pode
        configurable: false // Posso reconfigurar a chave (apagar e outras coisas), neste caso não pode
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 5000; //Não posso alterar

delete p1.estoque; // Não posso apagar e nem reconfigurar

p1.preco = 40; // Já o preço pode ser alterado normalmente, pois foi configurado para isto

console.log(p1);

console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}