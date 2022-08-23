const img = document.getElementById('img');
const botao02 = document.getElementById('botoes');

const iniciaBotoes =(event) => {
    criaBotoes[event.target.id]();
}
const criaBotoes = {
    'bear': () => img.src = './img/bear.jpg',
    'bat': () => img.src = './img/bat.jpg',
    'koala': () => img.src = './img/koala.jpg',
    'fox': () => img.src = './img/fox.jpg',
    'whale': () => img.src = './img/whale.jpg',
    'lion': () => img.src = './img/lion.jpg',
};

botao02.addEventListener('click', iniciaBotoes);