const elements = [
    {tag: 'p', texto: 'Teste de Javascript'},
    {tag: 'div', texto: 'Criando tags com for e arrays'}, // Arrays com os objetos para aparecer na div 
    {tag: 'section', texto: 'Testando......'},
    {tag: 'footer', texto: 'Testando..............'},
    
];

const section = document.querySelector('.container'); // Seletor da classe no html
const div = document.createElement('div'); // Criação da div no html para adiconar os objetos no array

for (i = 0; i < elements.length; i ++) { // Criação da repetição dos indices do array
let {tag, texto} = elements[i]; // Desestruturação
let criaTag = document.createElement(tag);  // Para fazer as tags aparecerem
let criaTexto = document.createTextNode(texto); // Para fazer os textos aparecerm  
criaTag.appendChild(criaTexto); //Cola os textos dentro das respectivas tags
div.appendChild(criaTag); // Coloca as tags dentro da div criada no começo do codigo

}

section.appendChild(div); // Para aparecer a div criada dentro da section criada com ht