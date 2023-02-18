const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); //pego os estilos computados do body

const backgroundColorBody = estilosBody.backgroundColor; //Peguei especificamente a cor do body

console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}