const criaPergunta01 = event => {

    const sim = document.getElementById('sim_p1');
    const nao = document.getElementById('nao_p1');
    const resposta = document.getElementById('resposta1');
    const evento = event.target;
    if (evento === sim) {
        resposta.textContent = 'Parabéns'
    } else if (evento === nao) {
        resposta.textContent = 'Que pena'
    }
}

document.addEventListener('click', criaPergunta01);

const criaPergunta02 = event => {

    const sim = document.getElementById('sim_p2');
    const nao = document.getElementById('nao_p2');
    const resposta = document.getElementById('resposta2');
    const evento = event.target;
    if (evento === sim) {
        resposta.textContent = 'Parabéns'
    } else if (evento === nao) {
        resposta.textContent = 'Que pena'
    }
}

document.addEventListener('click', criaPergunta02);

document.addEventListener('click', (e) => {
    if()
})