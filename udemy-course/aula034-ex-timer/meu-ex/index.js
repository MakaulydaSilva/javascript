const watch = document.querySelector('.watch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');

function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}

let seconds = 0;

let myTimer;

function selectTimer() {
    myTimer = setInterval(function () {
        seconds++
        watch.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);

}

start.addEventListener('click', function (event) {
    watch.classList.remove('color');
    clearInterval(myTimer);
    selectTimer();
});

pause.addEventListener('click', function (event) {
    clearInterval(myTimer);
    watch.classList.add('color');
});

stopButton.addEventListener('click', function (event) {
   watch.classList.remove('color');
   clearInterval(myTimer);
   watch.innerHTML = '00:00:00';
   seconds = 0;
});


