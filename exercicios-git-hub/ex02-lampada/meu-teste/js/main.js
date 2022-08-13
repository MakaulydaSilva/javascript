function animais() {

    const btnMacaco = document.getElementById('btn-macaco');
const btnPassaro = document.getElementById('btn-passaro');
const btnCoelho = document.getElementById('btn-coelho');
const btnPrincipal = document.getElementById('voltar');
const imgAnimais = document.getElementById('img-animais');

function imgPrincipal() {
    imgAnimais.src = 'img/img-principal.jpg';
}

function imgCoelho() {
    imgAnimais.src = './img/coelho.jpg';
}

function imgPassaro() {
    imgAnimais.src = './img/passaro.jpg';
}

function imgMacaco() {
    imgAnimais.src = './img/macaco.jpg';
}

function imgTucano() {
    imgAnimais.src = './img/tucano.jpg';
}

function imgTigre() {
    imgAnimais.src = './img/tigre.jpg'
}

function teclaQmacaco() {
    document.addEventListener('keyup', event => {
        const Keymacaco = event.key;
        if (Keymacaco === 'q') {
            imgMacaco();
        }
        
          btnMacaco.focus();
    })
}

function teclaWpassaro() {
    document.addEventListener('keyup', event => {
        const keyPassaro = event.key;
        if (keyPassaro === 'w') {
            imgPassaro();
        }

        btnPassaro.focus();
    })
}

function teclaEcoelho() {
    document.addEventListener('keyup', event => {
        const keyCoelho = event.key;
        if (keyCoelho === 'e') {
            imgCoelho();
        }

        btnCoelho.focus();
    })
}

function teclaVoltaImgPrincipal() {
    document.addEventListener('keyup', event => {
        const keyPrincipal = event.key;
        if (keyPrincipal === 'r') {
            imgPrincipal();
        }

        btnPrincipal.focus();
    })
}

btnCoelho.addEventListener('click', imgCoelho);
btnPassaro.addEventListener('click', imgPassaro);
btnMacaco.addEventListener('click', imgMacaco);
btnPrincipal.addEventListener('click', imgPrincipal);
imgAnimais.addEventListener('dblclick', imgTucano);
imgAnimais.addEventListener('mouseover', imgTigre);
imgAnimais.addEventListener('mouseleave', imgPrincipal);
teclaQmacaco();
teclaWpassaro();
teclaEcoelho();
teclaVoltaImgPrincipal();

}

animais();
