function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seconds = 0;

let timer; //Acesso essa variável que está dentro da função

function startTime() {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds)
    }, 1000);
}

iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    startTime();
});

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
});



