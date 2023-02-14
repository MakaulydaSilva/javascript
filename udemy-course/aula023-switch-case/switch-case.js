const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto = 2;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = 'Coloque um número de 0 á 6.';
}

console.log(diaSemana, diaSemanaTexto);

//Este caso visto ali em cima é perfeito para usar o swtich, farei o mesmo exercício abaixo, desta vez com switch

const data02 = new Date('1999-02-23 00:00:00');
let diaSemana02 = data02.getDay();

function getDiaSemanaTexto(diaSemana02) {
    let diaSemanaTexto02;

    switch (diaSemana02) {
        case 0:
            diaSemanaTexto02 = 'Domingo';
            return diaSemanaTexto02;
        case 1:
            diaSemanaTexto02 = 'Segunda';
            return diaSemanaTexto02;
        case 2:
            diaSemanaTexto02 = 'Terça';
            return diaSemanaTexto02;
        case 3:
            diaSemanaTexto02 = 'Quarta';
            return diaSemanaTexto02;
        case 4:
            diaSemanaTexto02 = 'Quinta';
            return diaSemanaTexto02;
        case 5:
            diaSemanaTexto02 = 'Sexta';
            return diaSemanaTexto02;
        case 6:
            diaSemanaTexto02 = 'Sábado';
            return diaSemanaTexto02;
        default:
            diaSemanaTexto02 = 'Digite um número de 0 á 6';

    }
}

const diaSemanaTexto02 = getDiaSemanaTexto(diaSemana02);

console.log(diaSemana02, diaSemanaTexto02);