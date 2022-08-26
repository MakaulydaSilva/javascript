const spin01 = {
    fabricante: 'Chevrolet',
    marca: 'Spin',
    ano: '2018',
    preco: 75000
}

const spin02 = {
    ...spin01,
    lugares: 7,
}
spin02.preco = 80000;

for(let entry of Object.entries(spin02)) {
    console.log(entry);
}

console.log(Object.values(spin02));