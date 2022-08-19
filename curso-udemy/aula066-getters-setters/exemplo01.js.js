// defineProperty  -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a key
      //value: estoque, // valor
      //writable: true, //pode alterar ou não
      configurable: true, // configuravel , não pode alterar o valor ou pode alterar
      get: function() {
        return estoque;
      },
      set: function(valor) {
        if(typeof valor !== 'number') {
            console.log('Bad value');
        }
         estoquePrivado = valor;
      }
    
     });
 }

const p1 = new Produto('Camiseta' , 20, 3);
 //console.log(p1);
 p1.estoque = 600;
 console.log(p1.estoque);