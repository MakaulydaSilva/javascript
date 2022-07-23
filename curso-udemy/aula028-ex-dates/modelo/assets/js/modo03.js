const h1 = document.querySelector('.container h1');
const data = new Date();


function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    return diasSemana[diaSemana];

    }

function getNomeMes(numeroMes) {
    
     const meses = ['Janeiro', 'Fevereiro', 'Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
     return meses[numeroMes];
  }



function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}


function criaDate(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return  (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
         ` de ${data.getFullYear()}` +
         ` ${zeroAesquerda(data.getHours())}:${zeroAesquerda(data.getMinutes())}`
    );

}

h1.innerHTML = criaDate(data);