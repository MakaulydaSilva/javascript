const neymar = document.querySelector('.neymar');
const messi = document.querySelector('.messi');
const cRonaldo = document.querySelector('.c-ronaldo');
const mbappe = document.querySelector('.mbappe');
const haaland = document.querySelector('.haaland');
const vJunior = document.querySelector('.v-junior');

const jogadores = ['Neymar', 'Messi', 'Cristiano Ronaldo', 'Mbappe', 'Haaland', 'Vini Junior'];

const aleatorio = jogadores[Math.floor((Math.random() * jogadores.length))];

document.addEventListener('click', (e) => {

    let botao = e.target;

    if (neymar === botao) alert(`${jogadores[0]} contra ${aleatorio}.`);



});

console.log(aleatorio);



