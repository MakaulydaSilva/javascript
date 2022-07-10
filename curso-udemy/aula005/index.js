let nome; //Declarou a variavel sem atribuir valor
nome = 'João'; //Inicializando a variável
console.log(nome);
nome= 'Makauly'; // Variavel mudou de valor
console.log(nome);

// Não podemos criar variveis com palavras reservadas (let let) (let console) (let if)

// Variáveis precisam ter nomes significativos, exemplo de um erro > 

//let n = campoBaseDeDADOS;
//console. log(n);

// Variavel está sem nenhum contexto, isso é permitido pela regra mas é inviável pois o codigo ficaria confuso

//Não pode começar o nome de uma variável com número, exemplo >
//let 1nome;
let nome1 //Agora etá certo pois o número não está mais na frente

//Não podem conter espaços ou traços, exemplo >
//let nome Cliente;
//let nome-Cliente;


//Utilizamos camelCase
let nomeCompletoDoAluno = 'Makauly Pereira';
console.log(nomeCompletoDoAluno);

//Case-sensitive = letra maiuscula e minuscula faz diferença

let nomeCliente = 'Luiz';
let nomecliente = 'Pedro';

console.log(nomeCliente, 'e', nomecliente);

//Não podemos redeclarar variaveis com let
let nomeFuncionario = 'Luiz';
nomeFuncionario = 'Paulo';

//NAO UTILIZE VAR, UTILIZE LET.
