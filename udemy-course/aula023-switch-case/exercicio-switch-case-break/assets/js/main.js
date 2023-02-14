let hora = document.querySelector('.hora');

const data = new Date();

function cria0(num) {
    return num >= 10 ? num : `0${num}`;
}

function diaSemanaString(dia) {
    
    switch (dia) {
        case 0:
        return 'Domingo';
        case 1:
        return 'Segunda-feira';
        case 2:
        return 'Terça-feira';
        case 3:
        return 'Quarta-feira';
        case 4:
        return 'Quinta-feira';
        case 5:
        return 'Sexta-feira';
        case 6:
        return 'Sábado'
    }
}

function mesString(mes) {
    
    switch (mes) {
        case 0:
        return 'Janeiro';
        case 1:
        return 'Fevereiro';
        case 2:
        return 'Março';
        case 3:
        return 'Abril';
        case 4:
        return 'Maio';
        case 5:
        return 'Junho';
        case 6:
        return 'Julho';
        case 7:
        return 'Agosto';
        case 8:
        return 'Setembro';
        case 9:
        return 'Outubro';
        case 10:
        return 'Novembro';
        case 11:
        return 'Dezembro';
    }
}

function criaData(data) {
    const diaSemana = diaSemanaString(data.getDay());
    const dia = cria0(data.getDate());
    const mes = mesString(data.getMonth());
    const ano = data.getFullYear();
    const hora = cria0(data.getHours());
    const min = cria0(data.getMinutes());
    const seg = cria0(data.getSeconds());
    
    return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`;
}

const dataHtml = criaData(data);

hora.innerHTML = dataHtml;

