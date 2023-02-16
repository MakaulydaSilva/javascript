const elementos = [
    {tag: 'h1', texto: 'Meu Teste'},
    {tag: 'h2', texto: 'Testando'},
    {tag: 'p', texto: '<lorem>'},
    {tag: 'section', texto: 'artigo'},
];

const container = document.querySelector('.container');

const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);