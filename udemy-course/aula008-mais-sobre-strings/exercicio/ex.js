const nome = prompt('Digite o seu nome completo:');

const qntLetrasNome = nome.length;
const segundaLetra = nome.slice(1, 2);
const letraAnome = nome.indexOf('a');
const letraPnome = nome.lastIndexOf('y');
const ultimas3letras = nome.slice(-3);
const palavrasNome = nome.split(' ');
const letrasMaisculas = nome.toUpperCase();
const letrasMinusculas = nome.toLocaleLowerCase();

document.body.innerHTML = `O seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${qntLetrasNome} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br />`;
document.body.innerHTML += `Qual o primeio índice da letra a no seu nome: ${letraAnome} <br />`;
document.body.innerHTML += `Qual o último índice da letra y no  seu nome: ${letraPnome} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimas3letras} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${letrasMaisculas} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${letrasMinusculas} <br />`;




