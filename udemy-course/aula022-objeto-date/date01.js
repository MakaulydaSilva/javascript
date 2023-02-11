const data01 = new Date(2023, 1, 10, 16, 44, 30, 1000); //Ano ,Mês, Dia, Hora, Minuto, Segundos, Milisegundos
console.log(data01.toString());

const data02 = new Date('2023-02-10 16:51:59.100');
console.log(data02.toString());

console.log('Dia', data02.getDate());
console.log('Mês', data02.getMonth() + 1); //Mês começa do zero
console.log('Ano', data02.getFullYear());
console.log('Hora', data02.getHours());
console.log('Min', data02.getMinutes());
console.log('Seg', data02.getSeconds());
console.log('ms', data02.getMilliseconds());
console.log('Dia semana', data02.getDay()); // 0 - Domingo, 6 - Sábado

console.log(Date.now());
const data03 = new Date(1676059148999);
console.log(data03);
