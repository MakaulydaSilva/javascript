const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let proximaCor = 0;
let controlaLuzes = null;

const iniciaSemaforo = (event) => {
    paraAutomaticamente();
    ligaLuzes[event.target.id]();
};

const automaticoBotao = () => {
    const cores = ['red', 'yellow', 'green'];
    const cor = cores[proximaCor];
    ligaLuzes[cor]();
    lacoLuzes(); 
};

const lacoLuzes = () => proximaCor = proximaCor < 2 ? ++proximaCor : 0;

const paraAutomaticamente = () => {
    clearInterval(controlaLuzes);
}; 

const ligaLuzes = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => controlaLuzes = setInterval(automaticoBotao, 10000)
};

buttons.addEventListener('click', iniciaSemaforo);