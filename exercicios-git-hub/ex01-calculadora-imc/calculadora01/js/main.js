const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'Com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30) {
            classificacao = 'Você está levemente acima do peso';
        }else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I';
        }else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III.Tenha cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}!!!`;
    
    }else {
        resultado.textContent = 'Por favor preencha todos os campos!';
    }

    
}

function botaoEnter() {
    document.addEventListener('keyup', (event) => {
        const keyName = event.key; //Do jeito anterior estava obsoleto esta é a forma correta
        if(keyName !== 'Enter') return;
        imc();
        
    })
}

calcular.addEventListener('click', imc);
botaoEnter();
