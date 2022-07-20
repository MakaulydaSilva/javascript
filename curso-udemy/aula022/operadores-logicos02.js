/*
&& -> Todas expressoes precisam ser verdadeiras para que && retorne true

*/


// false && true = false "O valor mesmo"
console.log('Makauly Pereira' && 0 && 'Maria');

/*
  Em JavaScript tudo pode ser avaliado em true ou false.
  
  FALSY
   -false
   0
   '' "" ```
   null / undefined
   NaN
   
   QUALQUER COISA ALÉM DESSAS AI ACIMA É AVALIADO COMO TRUE
*/ 

console.log('Luiz' && 'Maria'); // Vai ser chegado se há valor false, caso não tenha como aqui ele mostra o ultimo valor no caso 'Maria'

console.log('Makauly' && NaN && 'José'); // Neste caso ele checa e retorna o valor que é falso 

 function falaOi(){
    return 'Oi';
 }

 let Executar01;       

 console.log(Executar01 && falaOi()); // Como o primeiro valor foi false (no caso a variavel Executar esta vazia) não será executado a função pois o && retornou o false primeiro

 function falaOi(){
    return 'Oi';
 }

 let Executar02 = 'Léo';  

 console.log(Executar02 && falaOi()); //Já aqui o &&(and) le a primeira variavel que é um string portanto um valor verdadeiro e depois le o segundo, como ele não detecta nada que seja falso ele retorna a ultima variavel no caso a função 'Oi'


