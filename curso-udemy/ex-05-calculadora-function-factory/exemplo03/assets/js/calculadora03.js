function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.ativaBotoes();
            this.ativaEnter();
        },

        ativaBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-eq')) {
                    this.fazConta();
                }

                if (el.classList.contains('btn-num')) {
                    this.botaoNum(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.botaoClear();
                }

                if (el.classList.contains('btn-del')) {
                    this.botaoApagaUm();
                }

                this.display.focus();


            })


        },

        fazConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Este tipo de calculo é inválido!');
                }

                this.display.value = String(conta);

            } catch (error) {
                alert('Este tipo de calculo é inválido!');
                return;
            }
        },

        botaoNum(valor) {
            this.display.value += valor;
        },

        botaoClear() {
            this.display.value = '';
        },

        botaoApagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        ativaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.fazConta();
                }
            })
        }




    }
}

const calculadora = criaCalculadora();

calculadora.inicia();

