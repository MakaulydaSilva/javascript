const pessoa = {
      nome: 'Makauly',
      sobrenome: 'Pereira',
      idade: 23
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}