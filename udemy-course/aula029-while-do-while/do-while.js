
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10;

console.log( rand !== 10); //False

do {
    rand = random(min, max); //Alterou o valor da variável que valia 10
    console.log(rand);
} while (rand !== 10);  //Primeiro executa e depois chega para continuar o laço, diferente do while comun que primeiro checa se a condição é true para fazer o laço