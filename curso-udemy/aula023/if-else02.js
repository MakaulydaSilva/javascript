const numero01 = 10;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {código}



if (numero01 >= 0 && numero01 <= 5) {
    console.log('O número está entre 0 e 5.');
} else {
    console.log('O número não está entre 0 e 5.');
}

//-------------------------------------

const numero02 = 10;



if (numero02 >= 0 && numero02 <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero02 >= 6 && numero02 <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (numero02 >= 9 && numero02 <= 11) { //Este é o VERDADEIRO, como já foi encontrado o valor ele não lerá mais nada do if else ou else , pois ja foi checado e encontrado o que se queria, tudo que será lido vai ser depois do else
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.')
}

console.log('Tudo á partir daqui volta a ser lido normalmente');


//ENQUANTO O IF E O ELSE IF FOR FALSO ELE CONTINUARA CHECANDO ATÉ ACHAR O VERDADEIRO E ENTREGAR O RESULTADO. MESMO QUE SE TENHA 2 RESULTADOS VERDADEIROS ELE EXIBIRA O PRIMEIRO ENCONTRADO E ENCERRARÁ O CODIGO COM ESTE RESULTADO

//Caso queira dois resultados basta fazer mais if pois um é independente do outro
const numero03 = 10;

if (numero03 >= 0 && numero03 <= 5) {
    console.log('O número está entre 0 e 5.');
} else {
    console.log('O número não está entre 0 e 5.');
}
// Aqui se tem 2 ifs e 2 resultados verdadeiros independentes
if ( numero03 < 15) {
    console.log('Claro seu Besta. XD');
}