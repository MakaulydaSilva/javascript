const pessoas = [
    { nome: 'Makauly', idade: 23 }, 
    { nome: 'Vitoria', idade: 20 }, 
    { nome: 'Margarete', idade: 42 }, 
    { nome: 'Pierre', idade: 0.9 }, 
    { nome: 'Marcelo', idade: 47 }, 
    { nome: 'Marciel', idade: 21 }, 
];

//Array só com os nomes
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

//Somente a idade
const idades = pessoas.map(obj => ({ idade: obj.idade}));
console.log(idades);

//Com ids
const comIds = pessoas.map(function(obj, indice) {
      const newObj = {...obj }; //Estou copiando o obj para obter um novo para poder adicionar os indices, e assim eu não passo por referencia o original
      newObj.id = (indice + 1);
      return newObj;
      
});
console.log(comIds);