/*
|| -> Todas expressoes precisam ser falsas para || retornaram false, se uma expressao for true o o resultado será true
*/

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

// true && false -> vai retornar "o valor verdadeiro"

console.log(0 || false || null|| 'Makauly' || true); // Foi retornado o primeiro valor verdadeiro que ele encontrou

const corUsuario01 = null;
const corPadrao01 = corUsuario01 || 'preto';

console.log(corPadrao01); //Aqui ele mostrará a variavel vermelho pois o valor de null é falso é o || (or) mostra valores verdadeiros

const corUsuario02 = 'vermelho';
const corPadrao02 = corUsuario02 || 'preto';

console.log(corPadrao02); //Já aqui ele mostrara vermelho pois as duas variaveis sao verdadeiras e o || le a que aparece primeiro

const a = 0;
const b = null;
const c = 'false'; // Aqui é verdadeiro pois isso é um string, e será a variavel retornada
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

const a1 = 0;
const b2 = null;
const c3 = false;
const d4 = false;
const e5 = NaN;

console.log(a1 || b2 || c3 || d4 || e5); // Agora o valor retornado sera NaN POIS todas são falsas e ele retorna simplesmente o ultimo valor verificado