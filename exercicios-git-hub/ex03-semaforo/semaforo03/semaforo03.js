const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let indexOfCores = 0;
intervalId = null;

const lights = (event) => {
    paraSemaforo();
    luzesAcessas[event.target.id]();
}

const luzesAutomaticas = () => indexOfCores = indexOfCores < 2 ? ++indexOfCores : 0;   

const coresAutomaticas = () => {
    const cores = ['red', 'yellow', 'green'];
    const ligaCores = cores[indexOfCores];
    luzesAcessas[ligaCores]();
    luzesAutomaticas();
}
const paraSemaforo = () => {
    clearInterval(intervalId);
}
const luzesAcessas = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(coresAutomaticas, 1000),
}
buttons.addEventListener('click', lights);