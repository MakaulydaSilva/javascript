
/*
Entre 0 - 11 = Bom dia
Entre 12 - 17 = Boa tarde
Entre 18 - 23 = Boa noite
*/

// if pode ser usado sozinho 
// else if não pode ser executado sozinho
// Sempre qie utilizo a palavra else, preciso de um if antes
// Eu posso ter varios else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else
const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');

} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
      console.log('Boa noite');
} else {
    console.log('Olá') // Como foi colocado um valor além de entre 0 e 23, foi colocado esse valor de else somente para aparecer um resultado
}

const tenhoGrana = 'SIM'; // Foi avaliado como verdadeiro

if(tenhoGrana) {
    console.log('Vou sair de casa'); // esse será o resultado
} else {
    console.log('Não vou sair de casa'); // se a variavel fosse falsa esse seria o resultado
}


