'use strict';

//2º
//Crio o array de objetos do banco de dados com as tarefas (variavel global)
//let banco = [
//   { 'tarefa': 'Estudar JS', 'status': '' },
//    { 'tarefa': 'netflix', 'status': 'checked' },
//    { 'tarefa': 'teste', 'status': '' }
//];



//11º
//Function que vai armazenar as tarefas , pegar o valor do banco
// se todoList tiver valor de null passa pra ele o valor de array vazio
const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];

//12º
//Function que vai atualizar os valores das tarefas que foram pegadas do banco pelo getItem
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco));

//1º
//Function que recebe os argumentos para manipular o dom , o indice foi colocado por ultimo como na função atualizarTarefas
const criarItem = (tarefa, status, indice) => {
    //crio o elemento
    const item = document.createElement('label');
    //adiciono a classe
    item.classList.add('todo__item');
    //html do elemento, recebera um parametro para criar a descrição das tarefas
    //coloco o data-indice no checkbox e no X para diferencia-los numéricamente ao clicar 
    item.innerHTML = `
          <input type="checkbox" ${status} data-indice=${indice}>
          <div>${tarefa}</div>
          <input type="button" value="X" data-indice=${indice}>
    `
    //chamo o id da div do html, e adiciono  o elemento label criao em cima
    document.getElementById('todoList').appendChild(item);
}

//3º
//Function que pega as tarefas do banco e coloca nos argumentos da function criar item usando o forEach que percorre cada elemento do array
const atualizarTela = () => {
    //Chamo a função
    limparTarefas();
    //Chamo a function com o banco
    const banco = getBanco();
    //forEach cria um indice para cade elemento feito no data-indice da tarefa
    //coloco a tarefa e o status do banco para aparecer no dom -> ***o indice foi adicionado por ultimo  para pode diferenciar as tarefas***
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
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

//6º
//Function que coloca o texto digitado no input, e faz ele aparecer na lista
const inserirItem = (evento) => {
    //Ativo a tecla
    const tecla = evento.key;
    //Crio a variavel que tera o valor do evento selecionado no alvo do input neste caso ser adicionado o texto que eu escrevi
    const texto = evento.target.value;
    if (tecla === "Enter") {
        //Por ultimo criei essa variavel que tera o valor do banco do local storage, que contera as infomações das tarefas
        const banco = getBanco();
        //Faço um push para criar mais um array de objetos com a variavel do texto 
        banco.push({ 'tarefa': texto, 'status': '' });
        setBanco(banco);
        //Atualizo a tela para mostrar as novas alterações
        atualizarTela();
        //Após atualizar e inserir o valor digitado esvazia o input
        evento.target.value = '';
    }
}

//8º
// Function que adiciona 0 click para remover uma tarefa ou atualizar o checado da tarefa
const clickItem = evento => {
    const elemento = evento.target;
    //Interação com o botão apagar tarefa
    if (elemento.type === 'button') {
        //Seleciono o indice com o dataset(que foi criado no checkbox e no button) mais o indice que contem o valor
        const indice = elemento.dataset.indice;
        //Chamo a função que exclue o item se o elemento for igual ao botao
        removerItem(indice);
        //Interação com o botão checar tarefa
    } else if (elemento.type === 'checkbox') {
        //Seleciono o indice com o dataset(que foi criado no checkbox e no button) mais o indice que contem o valor
        const indice = elemento.dataset.indice;
        //Chamo a função criada para checar a tarefa
        atualizarItem(indice)
    }
}

//9º
//Function que faz a remoção da tarefa
const removerItem = (indice) => {
    //Chamo a função com as informações do banco
    const banco = getBanco();
    //indice, 1 === a tarefa toda
    banco.splice(indice, 1);
    //Atualizo a tela para mostrar a tarefa excluida
    //Chamo o setItem que atualizara as informações do banco
    setBanco(banco);
    atualizarTela();
}

//10º
//Function que atualiza o checado do item 
const atualizarItem = (indice) => {
    //Novamente faço a mesma coisa para o meu banco pegar as informações da tarefa essa tarefa no caso a de checar
    const banco = getBanco();
    //Vai verificar o estado das tarefas no banco tiver vazio checa, se tiver checado tira o vazio
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    //Atualizo as informações no banco
    setBanco(banco);
    //atualizo a tela
    atualizarTela();
}

//5º
//Crio o evento com o botao enter no input, chamando a function inserirItem
document.getElementById('newItem').addEventListener('keypress', inserirItem);

//7º
// Crio o evento de click na funcção clickItem
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();