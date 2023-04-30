function Carro(marca, modelo, ano, rodas, motor, placa) {

    this.rodas = rodas;
    this.motor = motor;

    Object.defineProperties(this, {
        marca: {
            enumerable: true,
            value: marca,
            writable: false, //Não pode ser alterado
            configurable: false,
        },
        modelo: {
            enumerable: true,
            value: modelo,
            writable: false,
            configurable: false,
        },
        ano: {
            enumerable: true,
            value: ano,
            writable: true, //Pode ser alterado
            configurable: false,
        },
        placa: {
            enumerable: false, //Não pode ser exibido na chave ou no for in
            value: placa,
            writable: false,
            configurable: false,
        },
    });
}

const carro01 = new Carro('Chevrolet', 'Spin', 2017, 'Pirelli', 'Turbo V6', 'PCX-0988');

carro01.motor = 'Hibrido V8'; // Pode ser alterado
carro01.marca = 'Ford'// Não pode ser alterado
delete carro01.ano; // Não pode ser excluído
carro01.ano = 2019; // Pode ser alterado

console.log(Object.keys(carro01));

for (let chave in carro01) {
    console.log(chave);
}

console.log(`Meu carro é do modelo ${carro01.modelo} da marca ${carro01.marca}, e o motor equipado é o ${carro01.motor} O veículo é do ano ${carro01.ano}, esta é a placa ${carro01.placa}.`);

console.log(carro01);