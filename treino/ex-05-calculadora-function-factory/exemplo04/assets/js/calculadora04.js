function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {

            this.ativaBotoes();
            this.botaoEnter();
        },

        ativaBotoes() {
            document.addEventListener('click', (e) => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.botaoNum(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.botaoClear();
                }

                if (elemento.classList.contains('btn-del')) {
                    this.botaoApagaUm();
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.botaoIgual();
                }

                this.display.focus();
            })
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

        botaoIgual() {
             let conta = this.display.value;

             try {
                 conta = eval(conta);

                 if(!conta) {
                    alert('Por favor insira um calculo válido!');
                 }

                 this.display.value = String(conta);
             
                } catch (error) {
                    alert('Por favor insira um calculo válido!');
                    return;
                }
        },

        botaoEnter() {
            document.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.botaoIgual();
                }
            })
        }
    }
}

const calculadora = criaCalculadora();

calculadora.inicia();