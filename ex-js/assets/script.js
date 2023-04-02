let p1Grif = document.querySelector('.p1');
let p2Corv = document.querySelector('.p2');
let p3Son = document.querySelector('.p3');
let p4Lunfa = document.querySelector('.p4');

let p8Grif = document.querySelector('.p8');
let p5Corv = document.querySelector('.p5');
let p6Son = document.querySelector('.p6');
let p7Lunfa = document.querySelector('.p7');

let p12Grif = document.querySelector('.p12');
let p11Corv = document.querySelector('.p11');
let p10Son = document.querySelector('.p10');
let p9Lunfa = document.querySelector('.p9');



document.addEventListener('click', (e) => {

    let botao = e.target;

    const p1Target = botao.classList.contains('p1');
    const p8Target = botao.classList.contains('p8');
    const p12Target = botao.classList.contains('p12');

    const p3Target = botao.classList.contains('p3');
    const p6Target = botao.classList.contains('p6');
    const p10Target = botao.classList.contains('p10');

    const p2Target = botao.classList.contains('p2');
    const p5Target = botao.classList.contains('p5');
    const p11Target = botao.classList.contains('p11');

    const p4Target = botao.classList.contains('p4');
    const p7Target = botao.classList.contains('p7');
    const p9Target = botao.classList.contains('p9');

    const escolha01 = [p1Target, p8Target, p12Target];  //Grifinoria
    const escolha02 = [p3Target, p6Target, p10Target];  // Sonserina
    const escolha03 = [p2Target, p5Target, p11Target]; // Corvinal
    const escolha04 = [p4Target, p7Target, p9Target]; // Lunfa-lunfa
    const escolha05 = [p1Target, p5Target, p10Target]; //Grifinoria
    const escolha06 = [p2Target, p5Target, p12Target]; //Sonserina
    const escolha07 = [p3Target, p6Target, p11Target]; //Corvinal
    const escolha08 = [p1Target, p5Target, p12Target]; // Lunfa-lunfa

    const resposta = document.querySelector('.resposta');

    if (escolha01[0], escolha01[1], escolha01[2]) resposta.innerHTML = 'Grifinoria';

    if (escolha02[0], escolha02[1], escolha02[2]) resposta.innerHTML = 'Sonserina';

    if (escolha03[0], escolha03[1], escolha03[2]) resposta.innerHTML = 'Corvinal';

    if (escolha04[0], escolha04[1], escolha04[2]) resposta.innerHTML = 'Lunfa - lunfa';

    if (escolha05[0], escolha05[1], escolha05[2]) resposta.innerHTML = 'Grifinoria';

    if (escolha06[0], escolha06[1], escolha06[2]) resposta.innerHTML = 'Sonserina';

    if (escolha07[0], escolha07[1], escolha07[2]) resposta.innerHTML = 'Corvinal';

    if (escolha08[0], escolha08[1], escolha08[2]) resposta.innerHTML = 'Lunfa - lunfa';


});