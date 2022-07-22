//Capturar o evento submit do formulário

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); //Previne o formulário, pra ele não ser enviado
    const inputPeso = e.target.querySelector('#peso'); // Dados do input
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value); // Dados do input transformados em number
    const altura = Number(inputAltura.value);



    if (!peso) { // Configurei para caso não ser colocado number no input 
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // Variavel do calculo do imc
    const nivelImc = getNivelImc(imc); // Variavel dos textos(os arrays) 
    const msg = `Seu imc é ${imc} (${nivelImc}).`; // Mensagem a ser exibida com os resultados

    
    setResultado (msg, true); // Colocado o valor true para setar as classes



});

function getNivelImc(imc) { // Foi criado o array para obter os valores
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
//Baseado no imc que irá ser recebido, será mostrando uma das mensagens, foi checado de trás pra frente
    if (imc >= 39.9) {
        return nivel[5];

    }
    if (imc >= 34.9) {
        return nivel[4];

    }
    if (imc >= 29.9) {
        return nivel[3];

    }
    if (imc >= 24.9) {
        return nivel[2];

    }
    if (imc >= 18.5) {
        return nivel[1];

    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2; //Este é o calculo do imc com as variaveis
    return imc.toFixed(2); //Para somente aparecer 2 casas decimais

}

function criaP() { //Cria o paragrafo paragrafo
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) { // Funcão que seta o resultado, ela recebe uma mensagem e se esse resultado é valido, ele zera o html...
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();//Cria-se um paragrafo...

    if (isValid) { // Se é verdadeiro, tem o fundo verde...
        p.classList.add('paragrafo-resultado'); 
    } else {
        p.classList.add('bad'); // Sé é falso tem um fundo vermelho
    }


    p.innerHTML = msg; 
    resultado.appendChild(p); //Adciona o paragrafo com a mensagem e o background
}