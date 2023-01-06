const nome = 'Makauyly';
const sobrenome = 'Pereira';
const idade = 23;
const peso = 90;
const alturaEmM = 1.86;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(

    `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg tem ${alturaEmM} de altura, e seu IMC é de ${imc}
    nascido em ${anoNascimento}.
    `
);

