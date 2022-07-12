const nome = 'Makauly Pereira';
const sobrenome ='Da Silva';
const idade = 23 ;
const peso = 86;
const alturaEmM = 1.86;
let imc = 24.858365128916635;
let anoDeNascimento = 1999;

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

anoDeNascimento = 2022 - idade;
console.log(anoDeNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em  ${anoDeNascimento}.`);

// + = unir valores
// crase com ${} = template strings