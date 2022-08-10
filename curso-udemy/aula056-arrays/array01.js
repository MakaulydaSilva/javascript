//const nomes = new Array('João', 'Levi', 'Alex'); = array construtora
// Valores por referência
//                0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes]; //Rest operator = com o rest operator oque eu faço em um array não afetara o outro

const removido = novo.pop();// Pop trabalha no final do array e shift trabalha no começo do array além disso o shift vai deslocar todos os indices do array

//nomes[2] = 'João';
//delete nomes[2];
//console.log(nomes);
//onsole.log(novo, removido);

//---------------------------

const nomes2 = ['Eduardo', 'Maria', 'Joana'];
nomes2.push('Alessandro');
nomes2.push('Maria'); // push adicona o elemento no final do array
nomes2.unshift('Gabriel'); // unshift adiciona o elemento no começo do array este não é muito utilizado pois ele afeta todos os indices do array
console.log(nomes2);