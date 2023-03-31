// IIFE -> Immediately Invoked Function Expression
(function(idade, peso, altura) {
  const nome = 'Luiz'; //Código protegido pelo escopo global

  const sobrenome = 'Pereira';
  
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Pierre'));
  };

  falaNome();
  console.log(idade, peso, altura);

})(01, 11, 0.86);

(function() {
    
})();

const nome = 'Zeca'; //Váriaveis diferentes