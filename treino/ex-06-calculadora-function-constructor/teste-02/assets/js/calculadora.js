function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.ativaEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            let el = e.target;

            if (el.classList.contains('btn-num')) this.addBotoesNum(el);
            if (el.classList.contains('btn-clear')) this.botaoClear();
            if (el.classList.contains('btn-del')) this.botaoDel();
            if (el.classList.contains('btn-eq')) this.botaoCalcula();

            this.display.focus();
        })
    };

    this.addBotoesNum = (el) => this.display.value += el.innerText;
    this.botaoClear = () => this.display.value = '';
    this.botaoDel = () => this.display.value = this.display.value.slice(0, -1);
    this.botaoCalcula = () => {
        try {
            let conta = eval(this.display.value);
            if (!conta) {
                alert('Digite uma conta válida!');
                return;
            }

            this.display.value = conta;

        } catch (error) {
            alert('Digite uma conta válida!');
            return;
        }
    };

    this.ativaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return;
            this.botaoCalcula();
        })
    };
}

const calculadora = new Calculadora();

calculadora.inicia();