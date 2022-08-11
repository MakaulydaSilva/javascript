const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classifica = '';

        if (valorIMC < 18.5) {
            classifica = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classifica = 'com peso ideal parabéns!!!'
        } else if ( valorIMC < 30) {
            classifica = 'levemente acima do peso.'
        } else if (valorIMC < 35) {
            classifica = 'com obesidade grau I.'
        }else if (valorIMC < 40) {
            classifica = 'com obesidade grau II.'
        } else {
            classifica = 'com obesidde grau III. Tenha cuidado!!!'
        }

        resultado.textContent = `${nome} seu imc é ${valorIMC} você está ${classifica}`

    }else {
        resultado.textContent = 'Por favor preencha todas as informações '
    }
} 

function ativaEnter() {
    document.addEventListener('keyup', e => {
        const keyName = e.key;
        if(keyName !== 'Enter')return;
        imc();
    })
}

calcular.addEventListener('click', imc);
ativaEnter();