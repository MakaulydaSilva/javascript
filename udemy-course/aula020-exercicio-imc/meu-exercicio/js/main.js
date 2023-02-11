function imc() {

    const form = document.querySelector('.form');
    let resposta = document.querySelector('.resposta');

    function isValid(valid) {
        if (valid) {
            resposta.classList.add('respostaBoa');
        } else {
            resposta.classList.add('respostaRuim');
        }
    }

    function buttonEvent(event) {
        event.preventDefault();

        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        const calculoImc = peso.value / (altura.value * altura.value);

        if(!calculoImc) {
            isValid(false);
            resposta.innerHTML = `insira dados válidos.`;
            return;
        }

        if(calculoImc) {
           resposta.classList.remove('respostaRuim');
        }

        if (calculoImc < 18.5) {
            isValid(true);
            resposta.innerHTML = `Você está abaixo do peso.`;
        } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
            isValid(true);
            resposta.innerHTML = `Seu peso está normal.`;
        } else if (calculoImc >= 25 && calculoImc <= 29.9) {
            isValid(true);
            resposta.innerHTML = `Você está com sobrepeso.`;
        } else if (calculoImc >= 30 && calculoImc <= 34.9) {
            isValid(true);
            resposta.innerHTML = `Você está com obesidade grau 1.`;
        } else if (calculoImc >= 35 && calculoImc <= 39.9) {
            isValid(true);
            resposta.innerHTML = `Você está com obesidade grau 2.`;
        } else if (calculoImc >= 40 ) {
            isValid(true);
            resposta.innerHTML = `Você está com obesidade grau 3.`;
        }
    }

    form.addEventListener('submit', buttonEvent);
}

imc();