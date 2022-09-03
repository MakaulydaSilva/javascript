

const criaResposta = (suaCasa) => {
    const elemento = document.createElement('p');
    elemento.classList.add('p_class');
    elemento.innerHTML = `PARABÊNS!! Você pertence a ${suaCasa}`;
    document.getElementById('resposta').appendChild(elemento);
}

const p1 = document.getElementById('p1');
const p4 = document.getElementById('p4');

const qualSuaCasa = evento => {
    let evento = evento.key;
    
    if( evento ===  'Q') {
        criaResposta('Grifinoria')
    }
}

document.getElementById('p1').addEventListener('keypress', qualSuaCasa);
//document.getElementById('p4').addEventListener('keypress', qualSuaCasa);

