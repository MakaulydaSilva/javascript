
function soma(n1, n2){
    return n1 + n2;
} 


var validar = 0;

function validaIdade(idade){
    
    if (idade >= 18){
         validar = true
    }else {
        validar = false
    }
    return validar;
    

}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5, 10));
