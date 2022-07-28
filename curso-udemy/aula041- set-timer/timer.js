function mostraHora() {
    let data = new Date();

     return data.toLocaleTimeString('pt-BR', {
         hour12: false
     });
}


const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000); // Atualiza a cada segundo

setTimeout(function() {
    clearInterval(timer);
}, 3000); // Para com três segundos

setTimeout(function() {
    console.log('Olha a hora');
},5000);