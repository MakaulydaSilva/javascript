//IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = 'Pereira';
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Makauly'));

    }

    falaNome();
    console.log(idade, peso, altura);

})(23, 90, 1.86); // Esta função esta fora do escopo global

const nome = 'Qualquer Coisa';

/*
(function() {

})();
*/

