//Deixa o codigo mais limpo, não permitindo usar variaveis sem declarar, por exemplo
'use strict';

//Variavel com os objetos da chave dos botoes e com o valor dos arquivos dos sons
const sons = {
    'Q': 'boom.wav',
    'W': 'clap.wav',
    'E': 'hihat.wav',
    'R': 'kick.wav',
    'T': 'openhat.wav',
    'V': 'ride.wav',
    'B': 'snare.wav',
    'N': 'tink.wav',
    'M': 'tom.wav',
}

//Função que criara as divs no DOM
const criaDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

//Selecionoo o objeto sons e seleciono as chaves, e para todas as chaves cria uma div
const exibir = (sons) => Object.keys(sons).forEach(criaDiv);

//Função que fara o som funcionar, seleciono cada som com o parametro letra usando a string
const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play();
}

//Adiciono o efeito criando a classe active
const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active');

//Ao soltar a tecla removo o efeito com o remove, mais o evento de transitionend, para dar tempo de toda a execução de adcionar efeito e remover dar tempo de ser visto
const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}


//Permito que somente sejam selecionadas os clicks das letras criada, coloco as funçoes de efeito
const ativarDiv = (evento) => {
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibir(sons);

//Ativo o click da função ativarDiv
document.getElementById('container').addEventListener('click', ativarDiv);
//Ativo as teclas selecionadas pelo target.id
window.addEventListener('keydown', ativarDiv);