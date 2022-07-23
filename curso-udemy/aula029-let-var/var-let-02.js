
const verdadeira = true;
var sobrenome = 'Miranda';


function falaOi () {
    //var nome = 'Luiz'; //A função protege o var dentro do seu escopo, se consultar o console.log fora da função ela não ira aparecer porque a função protege o var
   
    console.log(sobrenome);// Quando o var é definido fora da função ele é reconhecido

    if(verdadeira) {
        let nome = 'Luiz'; // não se pode declarar um variavel let fora de um bloco
        
    }
  
    console.log(nome);
}

falaOi();

//Var respeita o escopo de dentro da função, mas var não respeita outros blocos dentro  da função

// Let respeita todos os blocos mesmo outros feitos dentro da função