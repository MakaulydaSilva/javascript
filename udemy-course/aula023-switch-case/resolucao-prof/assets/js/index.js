const hora = document.querySelector('.hora');

const data = new Date();

hora.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});