'use strict';

//função que recebe os digitos da contagem formatados para aparecer  2 digitos da direita pra esquerda
const formatarDigito = (digito) => `0${digito}`.slice(-2);

//Função que pega os ids do html, faz o calculo dos segundos para ser inserido na contagem regressiva
const atualizar = (tempo) => {
 const segundos = document.getElementById('segundos');
 const minutos = document.getElementById('minutos');
 const horas = document.getElementById('horas');
 const dias = document.getElementById('dias');

 const qntdSegundos = tempo % 60;
 const qntdMinutos = Math.floor((tempo % (60 * 60)) / 60);
 const qntdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
 const qntdDias = Math.floor(tempo / (60 * 60 * 24));

 segundos.textContent = formatarDigito(qntdSegundos);
 minutos.textContent = formatarDigito(qntdMinutos);
 horas.textContent = formatarDigito(qntdHoras);
 dias.textContent = formatarDigito(qntdDias);
}

// Função que recebe o laço de contagem regressiva com o set interval 
const contagemRegressiva = (tempo) => {
    const pararContagem = () => {
        clearInterval(id);
    }
    const contar = () => {
        if (tempo === 0) {
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

//Função que pega a data do evento qualquer e subtrai pela data atual
const tempoRestante = () => {
    const dataEvento = new Date ('2022-08-23 18:20:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

// Contagem regressiva funcionará a partir do tempo restante setado na função
contagemRegressiva(tempoRestante());