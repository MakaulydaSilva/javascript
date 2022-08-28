setInterval(function(){
   let dataEhora = new Date();
   
   let dia = dataEhora.getDay();
   let mes = (dataEhora.getMonth()+1);
   let ano = dataEhora.getFullYear();
   let hora = dataEhora.getHours();
   let minuto = dataEhora.getMinutes();
   let segundo = dataEhora.getSeconds();

   dia = criaZero(dia);
   mes = criaZero(mes);
   hora = criaZero(hora);
   minuto = criaZero(minuto);
   segundo = criaZero(segundo);

   document.getElementById('hora').textContent = `Hoje é dia ${dia} do mês ${mes} do ano de ${ano}. E a hora atualizada é : ${hora}:${minuto}:${segundo}`;
},1000)

function criaZero(x) {
    if (x < 10) {
        x = '0'+x;
    }return x;
}