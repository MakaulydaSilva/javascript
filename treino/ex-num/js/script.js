const numero = Number(prompt('Digite o seu número:'));
const num1 = document.getElementById('num1');
const texto = document.getElementById('texto');

num1.innerHTML = numero;

texto.innerHTML += `<p> A raiz quadrada do seu número é: ${numero ** 0.5}</p>`; 

texto.innerHTML += `<p> ${numero} é inteiro? : ${Number.isInteger(numero)}</p>`;

texto.innerHTML += `<p> ele é NaN? : ${Number.isNaN(numero)}</p>`; 

texto.innerHTML += `<p> Arredondo para baixo: ${Math.floor(numero)}</p>`; 

texto.innerHTML += `<p> Arredondo para cima: ${Math.ceil(numero)}</p>`; 

texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`; 

texto.innerHTML += `<p> Representação binária do seu número: ${numero.toString(2)}</p>`; 