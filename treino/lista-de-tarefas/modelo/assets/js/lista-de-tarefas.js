function listaDeTarefas () {

const input = document.querySelector('.input-tarefa');
const botao = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefas');

botao.addEventListener('click', function(e) {
    if(!input.value)return;
    criaTarefa(input.value);
    const li = criaLi();
});

function criaLi() {
    const li = document.createElement('li');
    return li;
};

function criaTarefa(textoInput) {
     const li = criaLi();
     li.innerText = textoInput;
     tarefa.appendChild(li);
     criaBotaoApagar(li);
     limpaInput();
     salvarTarefas();
}


function criaBotaoApagar(li) {
     li.innerText += " ";
     const botaoApagar = document.createElement('button');
     botaoApagar.innerText = 'Apagar';
     botaoApagar.setAttribute('class', 'apagar');
     botaoApagar.setAttribute('title', 'Apague esta tarefa');
     li.appendChild(botaoApagar);
     
}

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
});

input.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(!input.value)return;
        criaTarefa(input.value);
        }
})

function limpaInput() {
    input.value = " ";
    input.focus();
}

function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefa', tarefasJSON);
    
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefa');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

}

listaDeTarefas();


