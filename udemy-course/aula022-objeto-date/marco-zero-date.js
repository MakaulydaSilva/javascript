const tresHoras = 60 * 60 * 3 * 1000; // + três horas
const umDia = 60 * 60 * 24 * 1000; // Um dia;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix

console.log(data.toString());