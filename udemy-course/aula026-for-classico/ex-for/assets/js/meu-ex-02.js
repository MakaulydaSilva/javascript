const elementos = [
    {tag: 'h1', texto: 'Meu Teste'},
    {tag: 'h2', texto: 'Testando'},
    {tag: 'p', texto: '<lorem>'},
    {tag: 'section', texto: 'artigo'},
];

//Seleciono a tag html
const container = document.querySelector('.container');

//Crio um elemento html
const div = document.createElement('div');

//Itero nos elementos para eles aparecerem no Dom 
for(let i = 0; i < elementos.length; i++) {
    //Fiz a desestruturção do sobjetos dentro do array
    let {tag, texto} = elementos[i];
    //Criei cada elemento das tags e tambem o texto
    let criaTag = document.createElement(tag);
    let criaTexto = document.createTextNode(texto);
 //Incluo os elementos na div com os filhos
    criaTag.appendChild(criaTexto);
    
    div.appendChild(criaTag);
}

container.appendChild(div);