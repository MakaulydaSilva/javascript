//Valor por referência
const nomes = ['Eduardo' , 'Maria', 'Joana', 'Golias'];
const novoNomes = nomes;
const copiaNomes = [...novoNomes, 'Tania']; //Com spread os valores são copiados e não passados por referência

nomes[2] = 'Mauricio';
delete nomes[2];

const removido = nomes.pop();

nomes.push('Fabio');
nomes.unshift('Marla');

const fatia = nomes.slice(1, -1);

console.log(nomes);

console.log(nomes.length);

console.log(removido);

console.log(fatia);

const filho = 'Pierre Pereira da Silva';

const nomeSeparado = filho.split(' '); //Vira Array

const viraString = nomeSeparado.join(' '); //Volta a ser string

console.log(nomeSeparado);

console.log(viraString);


// const nomes2 = new Array('Zeca', 'Pedro', 'Tulio');