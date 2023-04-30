function Carro(marca, modelo, ano, rodas, motor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.rodas = rodas;
    this.motor = motor;
}

const carro01 = new Carro('Chevrolet', 'Spin', 2017, 'Pirelli', 'Turbo V6');

console.log(`Meu carro é do modelo ${carro01.modelo} da marca ${carro01.marca}`);