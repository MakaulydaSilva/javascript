const inputTarefa = document.querySelector('.input-tarefa'); //Chamo a classe
const btnTarefa = document.querySelector('.btn-tarefa'); 
const tarefas = document.querySelector('.tarefas'); 

function criaLi() {
    const li = document.createElement('li'); // Função para criar os lis na ul
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { //Ativando o botão com a tecla enter
        if (!inputTarefa.value) return; 
        criaTarefa(inputTarefa.value); 
       
    }
});

function limpaInput() {
    inputTarefa.value = ''; // Função para limpar o input após uma tarefa criada
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' '; // Dá um espaço no texto e o botão
    const botãoApagar = document.createElement('button'); // Cria um botão nos lis
    botãoApagar.innerText = 'Apagar'; // Adciona o texto no botão
    botãoApagar.setAttribute('class', 'apagar'); // Cria a classe apagar no botão criado
    botãoApagar.setAttribute('title', 'Apagar esta tarefa'); //Coloca uma descrição no botão
    li.appendChild(botãoApagar); // ficha o botão nos lis
}

function criaTarefa(textoInput) {  // Função para juntar os lis com o texto na ul
   const li = criaLi();
   li.innerText = textoInput;
   tarefas.appendChild(li); //Ligando o a variavel li que sera criada com a classe tarefas
   limpaInput(); // Chamando a função para limpar o input 
   criaBotaoApagar(li); // Chama o botao criado para o texto

}

btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return; //Evento para capturar o texto no botão
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
   const el = e.target;
   if (el.classList.contains('apagar')) {
    //console.log(el.parentElement); >>   Verifica quem é o pai do elemento
    el.parentElement.remove(); // Do seu elemento selecionado (apagar) o pai dele será removido, logo ele também (aqui o elemento pai sera as lis criadas)
   }
});

