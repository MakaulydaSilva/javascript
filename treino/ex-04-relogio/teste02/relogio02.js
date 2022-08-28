setInterval(function() {
    const relogio = new Date();
    let data = relogio.getDate();
    let mes = (relogio.getMonth()+1); // valor de 0 a 11
    let ano = relogio.getFullYear();
    let hora = relogio.getHours();
    let minuto = relogio.getMinutes();
    let segundo = relogio.getSeconds();
    //Coloco a funcçao para colocar os 0 na frente dos valores menores ao 10
    data = colocaZero(data);
    mes = colocaZero(mes);
    minuto = colocaZero(minuto);
    segundo = colocaZero(segundo);

document.getElementById('hora').textContent = (`Hoje é dia: ${data}:${mes}:${ano} ${hora}:${minuto}:${segundo}`);

},1000)

function colocaZero(x) {
        if(x < 10) {
            x ='0'+x
        }return x;
}