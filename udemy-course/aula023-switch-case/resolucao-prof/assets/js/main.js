let hora = document.querySelector('.hora');

const data = new Date();

function cria0(num) {
    return num >= 10 ? num : `0${num}`;
}

function diaSemanaString(dia) {
   const diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
   return diaSemana[dia]; 
   
}

function mesString(mes) {
   const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] ;
   return meses[mes];
   
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

