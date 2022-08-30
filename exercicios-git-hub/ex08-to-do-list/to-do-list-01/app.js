'use strict';

//2º
//Crio o array de objetos do banco de dados com as tarefas (variavel global)
let banco = [
    { 'tarefa': 'Estudar JS', 'status': '' },
    { 'tarefa': 'netflix', 'status': 'checked' },
    { 'tarefa': 'teste', 'status': 'checked' }
];

//**1º
//Function que recebe os parametros para manipular o dom
const criarItem = (tarefa, status = '') => {
    //crio o elemento
    const item = document.createElement('label');
    //adiciono a classe
    item.classList.add('todo__item');
    //html do elemento, recebera um parametro para criar a descrição das tarefas
    item.innerHTML = `
          <input type="checkbox" ${status}>
          <div>${tarefa}</div>
          <input type="button" value="X">
    `
    //chamo o id da div do html, e adiciono  o elemento label criao em cima
    document.getElementById('todoList').appendChild(item);
}

//3º
//Function que pega as tarefas do banco e coloca nos argumentos da function criar item usando o forEach que percorre cada elemento do array
const atualizarTela = () => {
    //Chamo a função
    limparTarefas();
    //coloco a tarefa e o status do banco para aparecer no dom
    banco.forEach(item => criarItem(item.tarefa, item.status));
}

//4º
//Função que limpa as tarefas, ela será colocada no atualizar tarefas para ser executada primeiro
const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    //Enquanto existir o primeiro filho remove o ultimo filho da div pai, assim ele sempre ira excluir o úlltimo elemento da div pai
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

atualizarTela();
