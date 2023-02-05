function escopo() { //Escopo global do código

    const form = document.querySelector('.form'); //Seleciono o form do html

    const pessoas = []; //Crio array vazio que receberá o objeto com os valores do form

    const resultado = document.querySelector('.resultado'); //Seleciono o paragráfo html, onde ficara os valores digitados

    function eventoForm(event) {  //Crio um evento que ocorre quando aperta o botão enviar do html
       event.preventDefault(); //Ecento que faz parar de funcionar como mormalmente funcionária o botão, neste caso atualizaria a página

       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');  //Seleciono os html do formulário, onde eu colocarei os valores deles na página
       const altura = form.querySelector('.altura');

       pessoas.push({// pego o array vazio e faço um push pra ele conter os valores dos formulários
           nome: nome.value,
           sobrenome: sobrenome.value,
           peso: peso.value,   //Seleciono exatamente o valor que foi adcionado no formulário com o .value
           altura: altura.value
       });

       console.log(pessoas);

       resultado.innerHTML += ` 
           ${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}  
       `;//Crio o html que será exibido com os valores do formulário
    }

    form.addEventListener('submit', eventoForm);  //Adciono o evento para funcionar da maneira que eu digitei e não da forma padrão, o submit altera a forma padrão de enviar
}

escopo();