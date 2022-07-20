

function meuEscopo() {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');
    const pessoas = [];
                

                   function recebeEventoForm(evento) {
                    evento.preventDefault();
                    
                         const nome = form.querySelector('#nome');
                         const sobrenome = form.querySelector('#sobrenome');
                         const idade = form.querySelector('#idade');
                         const peso = form.querySelector('#peso');
                         const altura = form.querySelector('#altura');


                         pessoas.push({
                            nome: nome.value,
                            sobrenome: sobrenome.value,
                            idade: idade.value,
                            peso: peso.value,
                            altura: altura.value,
                         });


                         console.log(pessoas);

                         resultado.innerHTML += `<p>Nome:${nome.value} Sobrenome:${sobrenome.value} ` + ` Idade:${idade.value} Peso:${peso.value} Altura:${altura.value}. </p>`

                        

                   }

                    
        form.addEventListener('submit', recebeEventoForm);


}


meuEscopo();