let string1 = "Um \"texto\"";

let string2 = "Um \\texto\"";

//             01234567
let string3 = "Um texto";

console.log(string3.charAt(6));

let string4 = "Um texto";

console.log(string4.concat(' ', 'em', ' ', 'um', ' ', 'lindo', ' ' , 'dia.')); //Tem exatamente a mesma função da concatenação padrão
console.log(string4 + ' em um lindo dia.');
console.log(`${string4} em um lindo dia.`);

console.log(string4.indexOf('o', 3));

console.log(string4.lastIndexOf('m', 3));

console.log(string4.match(/[a-z]/g)); //Expressões regulares

console.log(string4.search(/x/));

console.log(string4.replace('Um' , 'Outro'));

let string5 = 'O rato roeu a roupa do rei de roma.';

console.log(string5.replace(/r/, '#')); //Substitui o primeiro r

console.log(string5.replace(/r/g, '#')); //Usando g substitui todos os r do texto

//             0123456789
let string6 = 'O rato roe';
console.log(string6.length); // tamanho do indíce 10 > de 0 á 9

//                      ínicio, fim
console.log(string5.slice(2, 6));

console.log(string5.length -3); // Com o negativo eu estou pegando o tamanho total da string menos a quantidade que está sendo pedida
console.log(string5.slice(-3));
console.log(string5.slice(32));

console.log(string5.slice(-5)); //Pegando a palavra roma

console.log(string5.slice(-5, - 1)); // Pegando a palavra roma e tirando o .

console.log(string5.substring(string5.length - 5, string5.length -1)); //Outra maneira de fazer

console.log(string5.split(' ')); //Divido a string em array com determinado valor pedido aqui no caso é o espaço

console.log(string5.split('r')); // Já aqui com r, perceba que o valor não entra no array

console.log(string5.split(' ', 3)); // Aqui eu determino a quantidade de limites no array

console.log(string5.toUpperCase()); //Função que deixa toda a string maiscula

console.log(string5.toLowerCase()); //Função que deixa toda a string minuscula



