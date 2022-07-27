function ePaisagem(largura, altura) {
    return largura >= altura ? true : false;
}

console.log(ePaisagem(1080, 1920));

//---------------------

function ePaisagem(largura, altura) {
    return largura >= altura; // Como irá chacar somente 2 posibilidades pode retirar a condiçao ternaria com o true ou false, pois o motor ja irá entender e funcionara da mesma maneira
}

console.log(ePaisagem(1080,1920));

// Arrow function

const ePaisagem02 = (largura02, altura02) => largura02 >= altura02;

console.log(ePaisagem02(1920, 1080));