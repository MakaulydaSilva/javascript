'use strict';

const formataDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qntSegundos = tempo % 60;
    const qntMinutos = Math.floor(tempo % (60 * 60) / 60);
    const qntHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qntDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formataDigito(qntSegundos);
    minutos.textContent = formataDigito(qntMinutos);
    horas.textContent = formataDigito(qntHoras);
    dias.textContent = formataDigito(qntDias);
}

const rodaCronometro = (tempo) => {
    const paraContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0) {
            paraContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
    const dataEvento = new Date('2022-11-09 00:00:00');
    const hoje = Date.now ();
    return Math.floor((dataEvento - hoje) / 1000);
}
 
rodaCronometro(tempoRestante());