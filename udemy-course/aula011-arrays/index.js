//            0123456789~
const nome = 'Makauly Pereira';

console.log(nome[14]);

//                0         1        2
const alunos = ['Luiz' , 'Maria', 'João']; 

console.log(alunos[0]);
console.log(alunos[2]);

//alunos[0] = 'Eduardo';
 
console.log(alunos);

//alunos[3] = 'Luiza'; //Adciono um índice no final do array

console.log(alunos.length); //Para ver o tamanho do array

alunos.push('Renata'); // Melhor maneira de adcionar um índice ao final do array
alunos.push('Fabio');
alunos.push('Luiza');

alunos.unshift('Paulo'); // Adciono o índice pro inicio do array
alunos.unshift('Lucio') // Esse passa a ser o índice 0

const removido = alunos.pop(); //Removo um elemento do final do array, eu consigo salvar o índice removido em uma variável

const removidoDoComeco =  alunos.shift(); //Removo o elemento do começo do array, também posso salvar em uma variável

delete alunos[1]; //Removo um índice específico, mas aqui o número do índice não é alterado fazendo com que o que foi removido fique como índice vazio

alunos.push('Kevin');
alunos.push('Pauline');

console.log(alunos.slice(0, 3)); //Fatio o array para aparecer somente os listados

console.log(alunos.slice(0 , -2)); //Também é possivel fazer com números negativos da mesma forma que fazemos com strings

console.log(typeof alunos); //Retorna object

console.log(alunos instanceof Array); //Para ter certeza que estou trabalhando com array



