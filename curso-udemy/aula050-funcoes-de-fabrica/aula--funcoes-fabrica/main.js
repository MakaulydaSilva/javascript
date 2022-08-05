// Factory Function
//Constructor Function
function criaPessoa(nome, sobrenome, alt, pe) {
    return {
        //metodos
        nome, 
        
        sobrenome,

        altura: alt,
        
        peso:  pe,

        fala: function(assunto = 'Falando sobre Java') {
            return `${this.nome} está ${assunto}.` // this chama o valor de onde a funcao esta na varivel
        },
        
        
        //Getter
        get nomeCompleto() {
           return `${this.nome} ${this.sobrenome}`; //Só obtem um valor
        },
        
        
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); //Sera transformando em uma array entre os espaços
            this.nome = valor.shift(); //Altero a variavel nome com o shift tirando o primeiro indice do array
            this.sobrenome = valor.join(' '); //Separa os valores por variaveis
            },
        
         //Getter
         get imc() { // colocando get a função imc fica como atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
};

const p1 = criaPessoa('Makauly', 'Pereira', 1.8, 90);
//console.log(p1.imc());
p1.nomeCompleto = "Makauly Pereira Da Silva"
const p2 = criaPessoa('José', 'Marcos', 1.8, 70); 
console.log(p2.fala('falando sobre JS')); // No caso eu estou chamando a funcao fala aqui no p2 por isso ele seta o valor desta variavel

const p3 = criaPessoa('Lino', 'Fausto', 1.7, 80); 

//this ira utilizar o valor de quem chamar o objeto

//console.log(p2.imc());

console.log(p1.imc); // Agora o imc funciona como um atributo e não uma função, sendo assim os console.logs não irão funcionar pois o imc esta setado como função

console.log(p1.nome); //Função vira  atributo
console.log(p1.sobrenome);

console.log(p1.fala());

console.log(p3.imc);
console.log(p2.imc);