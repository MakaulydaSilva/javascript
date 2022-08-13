const ligaEdesliga = document.getElementById('ligaEdesliga');
const lamp = document.getElementById('lamp');

function seQuebrada() {
      return lamp.src.indexOf('quebrada') > -1;
}

function quebrada() {
      lamp.src = './img/quebrada.jpg';
}

function ligado() {
    if(!seQuebrada()) {
   lamp.src = './img/ligada.jpg';
    }
}

function desligado() {
    if(!seQuebrada()) {
    lamp.src = './img/desligada.jpg';
    }
}



ligaEdesliga.addEventListener('click', ligado);
ligaEdesliga.addEventListener('dblclick', desligado);
lamp.addEventListener('dblclick', quebrada)