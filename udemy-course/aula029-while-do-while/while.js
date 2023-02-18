// const nome = 'Makauly';
// let i = 0;

// while (i < nome.length ) {
//  console.log(nome[i]);
//  i++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);

console.log(rand !== 10); //True 

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}
