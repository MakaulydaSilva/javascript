const verdadeira = true;

let nome1 = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

var nome2 = 'Otávio'; // Redeclarada

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função
if (verdadeira) {
    let nome1 = 'Otávio' // criando
    var nome2 = 'Rogério' // redeclarando


    if (verdadeira) {
        var nome2 = 'Matheus'; // redeclarando
        let nome1 = 'Outra coisa';
        
    }
}


console.log(nome1, nome2); // nome2 foi redeclarado e reinicalizado
