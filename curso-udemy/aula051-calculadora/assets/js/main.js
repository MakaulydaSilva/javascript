function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        btnClear: document.querySelector('.btn-clear'),
        //Function que sera chamada para iniciar functions que estão dentro dela
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();

        },
        //Function para ativar o evento de apentar o botão enter para realizar as contas
        pressionaEnter() {
            this.display.addEventListener('keyup' , (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },
        //Function que realiza as contas
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },
        // Function para deixar o display limpo
        clearDisplay() {
            this.display.value = '';
        },
        //Function que gera o mesmo valor clicado no display
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        //Function para apagar um numero do display
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        //Function para dar a funcionabilidade aos botoes
        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', (e) => { //Arrow function para o this não ter o valor de calculadora dentro da função
                const el = e.target;
                //Ao clicar no botao num o mesmo aparecera no display
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                // Limpar o display
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                // Apaga um numero
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                // Realiza os calculos ao ser clicado
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                // Faz o botao enter funcionar dando foco ao display
                this.display.focus();
            });
        },

    };
}

const calculadora = criaCalculadora(); // Varialvel da Function Factory
calculadora.inicia(); // Chama a função 