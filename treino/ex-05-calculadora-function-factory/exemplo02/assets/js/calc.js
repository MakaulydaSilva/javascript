function criaCalculadora() {
    return {
        numDisplay: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.ativaTeclaEnter();
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.botaoParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.botaoClear();
                }

                if (el.classList.contains('btn-del')) {
                    this.botaoApagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.botaoIgual();
                }

                this.numDisplay.focus();
            })
        },

        botaoParaDisplay(valor) {
            this.numDisplay.value += valor;
        },

        botaoClear() {
            this.numDisplay.value = '';
        },

        botaoApagaUm() {
            this.numDisplay.value = this.numDisplay.value.slice(0, -1);
        },

        botaoIgual() {
            let conta = this.numDisplay.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Esta é uma conta inválida!');
                }
                this.numDisplay.value = String(conta);
            } catch (error) {
                alert('Esta é uma conta inválida!');
                return;
            }
        },

        ativaTeclaEnter() {
            this.numDisplay.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.botaoIgual();
                }
            })
        },


    }
}

const calculadora = criaCalculadora();
calculadora.inicia();