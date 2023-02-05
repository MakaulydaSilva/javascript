function meuEscopo() {

    const form = document.querySelector('.form');

    // form.onsubmit = function (event) {
    //      event.preventDefault(); //Falo pro navegador prevenir oque habitaualmente iria acontecer, no caso a atualização da página ao enviar o formulário
    //      alert(1);
    //      console.log('foi enviado');
    // };

    const resultado = document.querySelector('.resultado');

    const pessoas = []; //Array vazio porque quem vai preencher o array é o envio do formulário 

    function recebeEventoForm(event) {

        event.preventDefault();  //Falo pro navegador prevenir oque habitaualmente iria acontecer, no caso a atualização da página ao enviar o formulário

        const nome = form.querySelector('.nome'); //Seleciono na variavel form, porque sei que a class que eu estou querendo pegar está dentro desta variável selecionada no html, usando o document é procurado no escopo global do html
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`;

    }




    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();