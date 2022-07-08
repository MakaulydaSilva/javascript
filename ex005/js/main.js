

function clicou(){
   
     document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
     //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.youtube.com/");
   // window.location.href = "https://www.youtube.com/";
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse";

}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";


}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}









/*
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

*/