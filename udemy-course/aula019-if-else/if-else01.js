/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * entre 18 - 23 - Boa noite
 */

// If pode ser usado sozinho
// Sempre que utilixo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na condição
// Só posso ter um else na condição
// Podemos usar condições somente com if e else

const hora = 444;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23 ) {
    console.log('Boa noite');
} else {
    console.log('Digite um número entre 0 e 23.');
}

const tenhoGrana = true;

//Como a constante tenhoGrana é true a condição será executada como 'Vou ao cinema', caso a constante tenhoGrana fosse false, a condição iria resultar em 'Não irei ao cinema'
if (tenhoGrana) {
    console.log('Vou ao cinema.');
} else {
    console.log('Não irei ao cinema.');
}