function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor.replace('coisa' , '');
        }
    };
 }

 const p1 = criaProduto('Camiseta');
 p1.nome = 'Qualquer coisa';//altero o valor
 console.log(p1.nome);