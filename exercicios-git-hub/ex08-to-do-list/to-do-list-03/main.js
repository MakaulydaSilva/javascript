'use strict';
//1
const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];

//7
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco));

//2
const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

//3
const atualizaTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
}
//4
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type="button" value="X" data-indice=${indice}>
    `
    document.getElementById('todoList').appendChild(item);
}

//5
const clickItem = evento => {
    const elemento = evento.target;
    if(elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice);
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
} 

//6
const removerItem = (indice) => {
  const banco = getBanco();
  banco.splice(indice, 1);
  setBanco(banco);
  atualizaTela();
}

//8
const atualizarItem = (indice) => {
  const banco = getBanco();
  banco[indice].status = banco[indice].status === '' ?
  'checked' : '';
  setBanco(banco);
  atualizaTela();
}

//9
const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === "Enter") {
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status': ''});
        setBanco(banco);
        atualizaTela();
        evento.target.value = '';
    }
}

//10
document.getElementById('newItem').addEventListener('keypress', inserirItem);

//11
document.getElementById('todoList').addEventListener('click', clickItem);

//12
atualizaTela();