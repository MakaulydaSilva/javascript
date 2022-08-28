function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.botaoEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', e => {

            const element = e.target;

            if (element.classList.contains('btn-num')) {
                this.addNumDisplay(element);
            }

            if (element.classList.contains('btn-clear')) {
                this.botaoClear();
            }

            if (element.classList.contains('btn-del')) {
                this.botaoDel();
            }

            if (element.classList.contains('btn-eq')) {
                this.botaoFazConta();
            }

            this.display.focus();
        })
    };

    this.addNumDisplay = (element) => this.display.value += element.innerText;

    this.botaoClear = () => this.display.value = '';

    this.botaoDel = () => this.display.value = this.display.value.slice(0, -1);

    this.botaoFazConta = () => {

        try {

            let conta = eval(this.display.value);  //Irá interpretar o display como código js fazendo o calculo como código

            if (!conta) {
                alert('Atenção esta conta é inválida');
                return;
            }

            this.display.value = Number(conta);
        } catch (error) {
            alert('Atenção esta conta é inválida');
            return;
        }
    };

    this.botaoEnter = () => {
         document.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return;
             this.botaoFazConta();
            })
    };

}

const calculadora = new Calculadora();

calculadora.inicia();