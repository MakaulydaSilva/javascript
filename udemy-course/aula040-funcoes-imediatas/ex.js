const aluno1 = 'Harry';
const aluno2 = 'Malfoy';
const aluno3 = 'Cedrico';
const aluno4 = 'Cho';

const casa1 = 'Sonserina';
const casa2 = 'Corvinal';
const casa3 = 'Grifinória';
const casa4 = 'Lunfa-lunfa';

const casas = [aluno1, aluno2, aluno3, aluno4];

const aleatorio = Math.floor(Math.random() * casas.length);

if (aleatorio === 1) console.log(`O aluno ${aluno2} pertence a casa ${casa1}.`);
if (aleatorio === 3) console.log(`O aluno ${aluno4} pertence a casa ${casa2}.`);
if (aleatorio === 0) console.log(`O aluno ${aluno1} pertence a casa ${casa3}.`);
if (aleatorio === 2) console.log(`O aluno ${aluno3} pertence a casa ${casa4}.`);


