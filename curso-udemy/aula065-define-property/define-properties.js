// defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a key
            value: nome, // valor
            writable: true, //pode alterar ou não
            configurable: true // configuravel , não pode alterar o valor ou pode alterar

        },
        preco: {
            enumerable: true, // mostra a key
            value: preco, // valor
            writable: true, //pode alterar ou não
            configurable: true// configuravel , não pode alterar o valor ou pode alterar
        },
        estoque: {
            enumerable: true, // mostra a key
            value: estoque, // valor
            writable: true, //pode alterar ou não
            configurable: false // configuravel , não pode alterar o valor ou pode alterar
        }
    })

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}

