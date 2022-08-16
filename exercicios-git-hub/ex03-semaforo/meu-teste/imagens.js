const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let index = 0;
intervalo = null;

const criaTarefa = (event) => {
    paraTudo();
    criaBotoes[event.target.id]();
};

criaBotoes = {
    'coelho': () => img.src = './img/coelho.jpg',
    'macaco': () => img.src = './img/macaco.jpg',
    'passaro': () => img.src = './img/passaro.jpg',
    'tigre': () => img.src = './img/tigre.jpg',
    'automatic': () => intervalo = setInterval(automatiza, 1000),
};

automatiza = () => {
    let imagens = ['coelho', 'macaco', 'passaro', 'tigre'];
    let imagem = imagens[index];
    criaBotoes[imagem]();
    laco();
};

laco = () => index = index < 3 ? ++index : 0;

paraTudo = () => {
    clearInterval(intervalo);
};

buttons.addEventListener('click', criaTarefa);