//não permite usar variaveis não declaradas
'use strict'; 

// chamo as imagens num array de objetos com a url
const imagens = [
    {'id': '1', 'url':'./img/apple-lisa.jpg', 'innerHtml': 'Apple Lisa'},
    {'id': '2', 'url':'./img/apple2.jpg', 'innerHtml': 'Apple 2'},
    {'id': '3', 'url':'./img/commodore64.jpg', 'innerHtml': 'Commodore 64'},
    {'id': '4', 'url':'./img/msx.jpg', 'innerHtml': 'MSX'},
    {'id': '5', 'url':'./img/next.jpg', 'innerHtml': 'Next Computer'},
    {'id': '1', 'url':'./img/pc-ibm.jpg', 'innerHtml': 'PC - IBM'},
]

//seleciono a div que contera as imagens
const containerItems = document.querySelector('#container-items');


//função que cria as divs das imagens
const carregaImagens = (imagens, container) => {
    imagens.forEach(imagem => {
        container.innerHTML += `
        <div class= "item"> 
           <h1> ${imagem.innerHtml} </h1>
          <img src='${imagem.url}'
          </div>
        `
    })
}

//Carrega as imagens
carregaImagens(imagens, containerItems);
//Seleciona a classe das imagens
let items = document.querySelectorAll('.item');
//Cria a ação de mexer a imagem com o botao
const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}
//Seleciona os botoes
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
//Cria a interação com as setas do teclado
document.addEventListener('keyup', event => {
    const keyLeft = event.key;
    if(keyLeft === 'ArrowLeft') {
        previous();
    }
})

document.addEventListener('keyup', event => {
    const keyRight = event.key;
    if(keyRight === 'ArrowRight') {
        next();
    }
})

