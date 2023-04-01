function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const element = window.event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.del();
            if (element.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {

        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida');
                return
            }

            this.display.value = conta;

        } catch (e) {
            alert('Conta inválida');
        }
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key === 'Enter') {
                this.realizaConta();
            }
        });
    };

}

const calculadora = new Calculadora();
calculadora.inicia();