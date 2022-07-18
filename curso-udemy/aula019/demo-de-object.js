let a = {
    nome:'Luiz',
    sobrenome: 'Otavio',
};

//let  b = a; //aqui b aponta para o mesmo local que a

let b = {...a}; // agora usando o splat o valor b somente foi copiado e é independente de a

a.nome = 'João';
console.log(a); // Somente a foi alterado
console.log(b);
