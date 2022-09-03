let select = document.getElementById('pergunta1');
let texto = document.getElementById('resposta1');

let select2 = document.getElementById('pergunta4')
let texto2 = document.getElementById('resposta2');

const pergunta1 = () => {
    const escolha = select.value;

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
pergunta1();

const pergunta2 = () => {
    const escolha2 = select2.value;

    if (escolha2 === 'p4') {
        texto2.textContent = 'teste 1'
    } else if (escolha2 === 'p5') {
        texto2.textContent = 'Teste 2';
    } else if (escolha2 === 'p6') {
        texto2.textContent = 'Teste 3';
    } else {
        texto2.textContent = '';
    }
}
pergunta2();


select.addEventListener('change', pergunta1);
select.addEventListener('change', pergunta2);
//document.addEventListener('change', suaCasa);
