function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida!');
                }

                this.display.value = String(conta);
            } catch (error) {
                alert('Conta inválida!');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', function (e) {
                const element = e.target;
                if (element.classList.contains('btn-num')) {
                    this.btnParaDisplay(element.innerText);
                }
                //bind(this) => faz com que a função use o this da calculadora e não o document
                //Arrow function trava o this que foi criado

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (element.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();