const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; //O id foi selecionado ali em cima, aqui eu coloco a minha variável numero que será manipulado no prompt

texto.innerHTML =  `<p>Seu número -2 é: ${numero - 2}</p>`;
texto.innerHTML +=  `<p>Seu número +2 é: ${numero + 2}</p>`;