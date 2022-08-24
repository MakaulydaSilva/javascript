'use strict';
//Vai colocar os digitos na função formatados para aparecer 2 digitos da direita pra esquerda com o slice
const formataDigito = (digito) => `0${digito}`.slice(-2);

//Seleciono os ids do html, crio o calculo dos segundos para a contagem regressiva, dos segundos, minutos, horas e dias usando a divisão de resto e o Math.floor para me mostrar somente 2 digitos do resultado total
const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qntdSegundos = tempo % 60;
    const qntdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qntdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60*60));
    const qntdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formataDigito(qntdSegundos);
    minutos.textContent = formataDigito(qntdMinutos);
    horas.textContent = formataDigito(qntdHoras);
    dias.textContent = formataDigito(qntdDias);
}

//Uma função de para a contagem com o clearInterval, um laço com a condição if de regresso a cada segundo para quando chegar a 0, recebo o atualizar com os calculos, e por fim o set interval que conta de segundo em segundo
const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    const contar = () => {
        if (tempo === 0) {
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

//Pego a data que eu quero que seja regredida com a função new Date, pego a data atual com o Date.now e subtraio o newDate pelo Datenow dividindo por 1000 milisegundos para ter o resultado exato da contagem regressiva solicitada no new Date
const tempoRestante = () => {
    const dataEvento = new Date ('2022-11-09 00:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

//Chamo a função com o parametro da função da data escolhida
contagemRegressiva(tempoRestante());