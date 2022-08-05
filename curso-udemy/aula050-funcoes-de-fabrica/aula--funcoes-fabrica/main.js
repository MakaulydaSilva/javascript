// Factory Function
function criaPessoa(nome, sobrenome, alt, pe) {
    return {
        //metodos
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.` // this chama o valor de onde a funcao esta na varivel
        },
        altura: alt,
        peso:  pe,
        //Getter
        get imc() { // colocando get a função imc fica como atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Makauly', 'Pereira', 1.8, 90);
//console.log(p1.imc());
const p2 = criaPessoa('José', 'Marcos', 1.8, 70); 
console.log(p2.fala('falando sobre JS')); // No caso eu estou chamando a funcao fala aqui no p2 por isso ele seta o valor desta variavel

//this ira utilizar o valor de quem chamar o objeto

//console.log(p2.imc());

console.log(p1.imc); // Agora o imc funciona como um atributo e não uma função, sendo assim os console.logs asima não irão funcionar pois o imc esta setado como função