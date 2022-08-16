//Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Makauly' , 'Pereira');

console.log(p1.nomeCompleto());

//Constructor function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this) //Agora nenhum objeto desta função será alterado
  
  // return this -> {}
}

// {} <- this 
const p2 = new Pessoa('Iran', 'Alves');
Object.freeze(p1); //Travei o objeto ele não será alterado
p2.nome = 'Outra Coisa'; // isso pode
//p2 = 'Outra coisa'; // isso não pode
//p2 = (endereço de memória) -> Valor
//p2 = (endereço de memória) = {nome 'Outra coisa'} -> você pode alterar o valor da memória
//p2 - (novo endereço de memória) -> isso não pode ser feito com constante
const p3 = new Pessoa('Zélia', 'Amorin');

console.log(p2);
console.log(p3);
