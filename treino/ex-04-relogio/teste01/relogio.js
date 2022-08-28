setInterval (function() {
    let relogio = new Date();

    let hora = relogio.getHours();
    let minuto = relogio.getMinutes();
    let segundo = relogio.getSeconds();

    //Chamo a função zero
    minuto = adicionaZero(minuto);
    segundo = adicionaZero(segundo);

    document.getElementById('hora').textContent = `${hora}:${minuto}:${segundo}`;
},1000)

function adicionaZero(x) {
    if(x < 10) {
        x = '0'+x;
    }return x;
}

