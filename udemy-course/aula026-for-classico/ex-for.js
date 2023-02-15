const carros = ['Fusca', 'Gol', 'Saveiro', 'I30', 'Spin', 'Fusion', 'Cruze', 'Kwdi', 'S10'];

for (let i = 0; i < carros.length; i++) {
    const carrosComecaF = carros[i].startsWith('F') ? 'Começa com F' : 'Não começa com F';

    console.log(carros[i], carrosComecaF);
}

//---------------------------------------------------------

const carros02 = ['Fusca', 'Gol', 'Saveiro', 'I30', 'Spin', 'Fusion', 'Cruze', 'Kwdi', 'S10', 'Brasilia', 'Tucson', 'Belina', 'Parati', 'Logan'];

for (let i = 0; i < carros02.length; i++) {
    if (carros02[i].includes('s') || carros02[i].includes('S')) {
        const carrosTemS = 'Tem S';
        console.log(carros02[i], carrosTemS);
    } else {
        const carrosTemS = 'Não tem S';
        console.log(carros02[i], carrosTemS);
    }
}