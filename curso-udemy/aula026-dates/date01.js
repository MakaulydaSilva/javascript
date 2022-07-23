//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
//console.log(data.toString());

const data01 = new Date(2021, 9, 26, 2, 30, 46, 555); // 0 = janeiro
console.log(data01.toString());

const data02 = new Date(1658517342889); // Também da para fazer com string = 2022-10-26 02:20:59.100


console.log('Dia', data02.getDate());
console.log('Mês', data02.getMonth()); // Mês começa do zero
console.log('Ano', data02.getFullYear());
console.log('Hora', data02.getHours());
console.log('Min', data02.getSeconds());
console.log('Seg', data02.getSeconds());
console.log('ms', data02.getMilliseconds());
console.log('Dia semana', data02.getDay()); // 0 - Domingo, 6 - Sábado

console.log(data02.toString());

console.log(Date.now()); // 1658517342889