
//            0123456789101112
const nome = 'Makauly Pereira';

//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];
//console.log(alunos);
//console.log(alunos[0]);
//console.log(alunos[2]);

alunos[0] = 'Eduardo'; // Substituindo um elemento
alunos[3] = 'Matheus'; // adcionando um elemento na array

alunos[alunos.length] = 'Batista';
alunos[alunos.length] = 'Marcelo'; // outra forma de adcionar elementos
alunos[alunos.length] = 'Marla';


alunos.push('Pedro'); // maneira melhor de adcionar elemento no array, o elemento é adcionado no fim 

alunos.unshift('Carla'); // Adciona o elemento no começo do array
alunos.unshift('Fabio');

alunos.pop(); //Remove o ultimo elemento do array

const removido = alunos.pop();
console.log(removido);         // Mostra o elemento que foi removido

alunos.shift();  // Elimina o elemento do começo do array

const removidoInicio = alunos.shift();  // Mostra o elemento que foi removido
console.log(removidoInicio);

//delete alunos[1]; // Deleta um elemento e torna o espaço vazio

//console.log(alunos.slice(0, -2));
//onsole.log(alunos.slice(0, 3)); //Divide o array da maneira escolhida


//console.log(alunos.length);  // mostra a quantidade de elementos no array

console.log(typeof alunos); // array é um object

console.log(alunos instanceof Array); // Para ver se você esta realmente trabalhando com array

