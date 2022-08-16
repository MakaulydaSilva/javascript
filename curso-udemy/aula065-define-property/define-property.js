// defineProperty 
function Produto(nome, preco, estoque) {
   this.nome = nome;
   this.preco = preco;
   

   Object.defineProperty(this, 'estoque', {
     enumerable: true, // mostra a key
     value: estoque, // valor
     writable: true, //pode alterar ou não
     configurable: false // configuravel , não pode alterar o valor ou pode alterar
   
    });
}

const p1 = new Produto('Camiseta' , 20, 3);
p1.estoque = 50000;
delete p1.estoque; //configurable:false -> não permiti eu alterar 
for(let chave in p1) {
    console.log(chave);
}