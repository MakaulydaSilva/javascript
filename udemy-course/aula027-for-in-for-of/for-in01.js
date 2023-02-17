//                0        1       2
const frutas = ['Pera', 'Maçã', 'Uva']; //Araay de única dimensão = Vetor

// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let index in frutas) {
    console.log(frutas[index]);
}


//--------------------------------------


const pessoa = {
    nome: 'Pierre',
    sobrenome: 'Pereira',
    idade: 1
};

for (let Chavepierre in pessoa) {
    console.log(Chavepierre, pessoa[Chavepierre]);
}

const chave = 'nome'; // 

console.log(pessoa.nome);
console.log(pessoa[chave]); //Acesso o valor da chave, dessas duas maneiras