setInterval( function(e){
  let relogioEdata = new Date();
  
  let hora = relogioEdata.getHours();
  let minuto = relogioEdata.getMinutes();
  let segundo = relogioEdata.getSeconds();
  let dia = relogioEdata.getDate();
  let mes = (relogioEdata.getMonth()+1);
  let ano = relogioEdata.getFullYear();

  hora = criaZero(hora);
  minuto = criaZero(minuto);
  segundo = criaZero(segundo);
  dia = criaZero(dia);
  mes = criaZero(mes);
  ano = criaZero(ano);

  document.getElementById('hora').textContent = `Hoje é dia ${dia} do mês ${mes} do ano de ${ano}. Agora são ${hora}:${minuto}:${segundo}`;
},1000)

function criaZero(x) {
    if (x < 10) {
         x = '0'+ x
    }return x;
}