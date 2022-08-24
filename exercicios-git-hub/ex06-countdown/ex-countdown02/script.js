'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

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

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    
    const contar = () => {
        if (tempo === 0) {
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
   const dataEvento = new Date ('2022-08-23 18:20:00');
   const hoje = Date.now();
   return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());