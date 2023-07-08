const produto01 = { nome: 'Caneca', preco: 27 };

const outraCoisa = produto01;

produto01.nome = 'Prato';
outraCoisa.preco = 44;

console.log(produto01);
console.log(outraCoisa); //Ambas variaveis apontam para o mesmo lugar na memória

//-----------------------------------------------------------

const produto02 = { nome: 'Rodo', preco: 16 };
const copiaProduto = { ...produto02, material: 'Madeira' }; //Adciono outro objeto

produto02.nome = 'Vassoura';
copiaProduto.preco = 07;

console.log(produto02);
console.log(copiaProduto); //Agora o valor foi copiado

// Outro método para copiar
const produto03 = { nome: 'Celular', preco: 1600 };
const celular = Object.assign({}, produto03, { material: 'Aluminio' });

//------------------------------------------------------------

const produto04 = { nome: 'Pc', preco: 4700 };

Object.defineProperty(produto04, 'nome', {
    configurable: false //Propriedade nome não pode ser alterada
});

console.log(Object.getOwnPropertyDescriptor(produto04, 'nome')); //Vejo como esta a configuração do meu objeto (mostra o descritor do objeto)

console.log(Object.values(produto04)); //Retorna os valores do objeto

console.log(Object.entries(produto04)); //Retorna as chaves e os valores mais em arrays

for (let valor of Object.entries(produto04)) {
    console.log(valor[0], valor[1]);
}