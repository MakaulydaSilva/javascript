const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);

//------------------------------------------------------------

const pessoas = [
    { nome: 'Makauly', idade: 24 },
    { nome: 'Pierre', idade: 01 },
    { nome: 'Vitoria', idade: 20 },
    { nome: 'Margarete', idade: 43 },
    { nome: 'Marcelo', idade: 47 },
    { nome: 'Marciel', idade: 22 },
];

//Somente os nomes
const nomes = pessoas.map(obj => obj.nome);

//Somente objeto com idades
const idades = pessoas.map(obj => ({ idade: obj.idade }));

//Adcionando uma chave id para cada objeto
const comIds = pessoas.map((obj, indice) => {
    //copio o array pra ele não ser passado por referência e não ser alterado
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 1; //Pra não ter o id 0
    return newObj;
});

console.log(nomes);

console.log(idades);

console.log(comIds);

console.log(pessoas);