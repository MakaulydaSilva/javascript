const botao = document.getElementById('botoes');

const ativaAudio = (event) => {
    const audio = new Audio(`./sounds/${event.target.id}.wav`);
    audio.play();
}

botao.addEventListener('click', ativaAudio);



