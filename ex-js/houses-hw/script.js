document.addEventListener('click', (e) => {

    let botao = e.target;

    const p1Target = botao.classList.contains('p1');  //GRI
    const p8Target = botao.classList.contains('p8'); //GRI
    const p12Target = botao.classList.contains('p12'); //GRI

    const p3Target = botao.classList.contains('p3'); //SON
    const p6Target = botao.classList.contains('p6'); //SON
    const p10Target = botao.classList.contains('p10'); //SON

    const p2Target = botao.classList.contains('p2'); //COR
    const p5Target = botao.classList.contains('p5'); //COR
    const p11Target = botao.classList.contains('p11'); //COR

    const p4Target = botao.classList.contains('p4'); //LUN
    const p7Target = botao.classList.contains('p7'); //LUN
    const p9Target = botao.classList.contains('p9'); //LUN

    const escolhas = [p1Target, p2Target, p3Target, p4Target, p5Target, p6Target, p7Target, p8Target, p9Target, p10Target, p11Target, p12Target];

    const resposta = document.querySelector('.resposta');

    if (escolhas[0], escolhas[7], escolhas[11]) resposta.innerHTML = 'Grifinoria';

    if (escolhas[2], escolhas[5], escolhas[9]) resposta.innerHTML = 'Sonserina';

    if (escolhas[1], escolhas[4], escolhas[10]) resposta.innerHTML = 'Corvinal';

    if (escolhas[3], escolhas[6], escolhas[8]) resposta.innerHTML = 'Lunfa - lunfa';

    if (escolhas[0], escolhas[4], escolhas[9]) resposta.innerHTML = 'Grifinoria';

    if (escolhas[1], escolhas[4], escolhas[11]) resposta.innerHTML = 'Sonserina';

    if (escolhas[2], escolhas[5], escolhas[10]) resposta.innerHTML = 'Corvinal';

    if (escolhas[0], escolhas[4], escolhas[11]) resposta.innerHTML = 'Lunfa - lunfa';
});