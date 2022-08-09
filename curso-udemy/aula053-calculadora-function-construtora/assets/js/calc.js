function Criacalculadora() {
    
    const display = document.querySelector('.display');

    this.inicia = () => {
        this.selecionaBotao
    };

    this.selecionaBotao = () => {
        document.addEventListener('click', (e) => {

            const elemento = e.target;
            
            if(elemento.classList.contains('btn-num')) {
                this.botaoNum(elemento.innerText);
            }
        })
    };

    this.botaoNum = (valor) => {
        display.value += valor;
    };

   
}

const calculadora = Criacalculadora();
