
// Condicional
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("maior de idade");
    
}else{
    alert("menor de idade");
} 



// Laços de repetição (while = enquanto)
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}


var count;
        for(count=0; count <= 5; count++) {
            alert(count);
        }

//Diferentes maneiras de ver a data
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getFullYear());
alert(d.getMinutes());