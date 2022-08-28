function criaCalculadora() {
   return {
      ativaDisplay: document.querySelector('.display'),

      btnClear: document.querySelector('.btn-clear'),

      inicia() {
         this.cliqueBotoes();
         this.pressionaEnter();
      },

      cliqueBotoes() {
         document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
               this.botaoParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-eq')) {
               this.realizaConta();
            }

            if (el.classList.contains('btn-clear')) {
               this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
               this.apagaUm();
            }

            this.ativaDisplay.focus();
         })
      },

      botaoParaDisplay(valor) {
         this.ativaDisplay.value += valor;
      },

      realizaConta() {
         let conta = this.ativaDisplay.value;

         try {
            conta = eval(conta);

            if (!conta) {
               alert('Esta conta é inválida!');
            }

            this.ativaDisplay.value = String(conta);
         
         } catch (error) {
            alert('Esta conta é inválida!');
            return;
         }

      },

      clearDisplay() {
         this.ativaDisplay.value = '';
      },

      apagaUm() {
         this.ativaDisplay.value = this.ativaDisplay.value.slice(0,-1);
      },

      pressionaEnter() {
         this.ativaDisplay.addEventListener('keyup' , (e) => {
            if (e.keyCode === 13) {
               this.realizaConta();
            }
         })
      }


   }
}

const calculadora = criaCalculadora();

calculadora.inicia();