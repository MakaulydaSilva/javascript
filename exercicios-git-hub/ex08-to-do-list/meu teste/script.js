let select = document.getElementById('pergunta1');
let texto = document.getElementById('resposta');

const pergunta1 = () => {
    let escolha = select.value;

    if (escolha === 'p1') {
        texto.textContent = 'É preciso ter coragem para enfrentar os inimigos, e ainda mais para enfrentar os amigos.'
    } else if (escolha === 'p2') {
        texto.textContent = 'Coragem não signigicada não ter medo, mas sim ter força para enfrenta-los.'
    } else if (escolha === 'p3') {
        texto.textContent = 'Você foi sincero, isso de certa forma é coragem';
    } else {
        texto.textContent = '';
    }
}

const textoSuaCasa = (suaCasa) => {
    const elemento = document.createElement('p');
    elemento.classList.add('p_class');
    elemento.innerHTML = `PARABÊNS!! Você pertence a ${suaCasa}`;
    document.getElementById('suaCasa').appendChild(elemento);
}

const suaCasa = () => {
    let escolha = select.value;
    if (escolha === 'p1') {
        return textoSuaCasa('GRIFINÓRIA');
    } else if (escolha === 'p2') {
        return textoSuaCasa('CORVINAL');
    } else if (escolha === 'p3') {
        return textoSuaCasa('LUFA-LUFA');
    }
}

select.addEventListener('change', pergunta1);
document.addEventListener('change', suaCasa);
