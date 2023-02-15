const verdadeira = true;
var sobrenome =  'Tatu';

function falaOi () {
    var nome = 'Luiz'; //ESta variável só pode ser acessada dentro desta função, pois ela esta protegida pelo escopo da função
    
    if(verdadeira) {
    let nome2 = 'Makauly';
    console.log(sobrenome); //Eu posso chamar uma variável de fora da função
    }

    console.log(nome2); //Uma variável com let não pode ser acessada fora do bloco que foi criada dentro da função
}

falaOi();