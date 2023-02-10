//Capturar evento de submit do formulário
const form = document.querySelector('#form');

// Adiciona um evento que escuta o formulario e previne o envio do formulario com o submit e o preventDefault
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //Captura o input
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    //Converte os inputs pra number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //Se for avaliado como NaN retorna este resultado
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
   //Criou uma função especifica para capturar o imc, o nivel do imc com o array de string
    const imc = getImc(peso, altura);
    const NivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${NivelImc}).`
     //Seta o resultado com a flaf true para nossa classe ser verde e dada como verdadeira
    setResultado(msg, true);
});

//Função com lista de string
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
//Valor checado de trás pra frente
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
    
}

//Função faz o cálculo do imc
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//Cria o paragrafo
function criaP() {
    const p = document.createElement('p');
    return p;
}

//Seta o resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
   //Se for válido background verde
    if (isValid) {
        p.classList.add('paragrafo-resultado');
        //Se for false background vermelho
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    ; resultado.appendChild(p);
}

