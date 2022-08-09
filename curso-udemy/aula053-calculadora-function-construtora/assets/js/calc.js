//Function factory
function Calculadora() {
    
    this.display = document.querySelector('.display');

    this.capturaCliques = () => { //Captura o ecento de cliques dos botoes
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();
            //Cada evento é despachado para um método

            this.display.focus();
        });
    };
    
    //Método para colocar o número clicado no display
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
    };

    this.inicia = () => {  // Vai checar pelo capturaCliques e capturaEnter colocado nesta function
        this.capturaCliques(); 
        this.capturaEnter();
    };
    //Método que faz com que o enter realize as contas ao ser clicado
    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        })
    }
    
    //Método para limpar o display
    this.clear = () => this.display.value = ''; //Arrow function reduzida, funciona qnd a function tem somente uma linha
    
    //Método que apaga o ultimo elemento do display
    this.del = () => this.display.value = this.display.value.slice(0, -1);  // Outra arrow function reduzida
     
    // Método que irá tentar fazer com que o js avalie o que esta no display como código js, fazendo assim os calculos (ele avaliara como conta)
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Atenção esta conta é inválida');
                return; //Se for NaN 
            }
             
            this.display.value = conta; //Se ele avaliar como conta

           
        }catch(error) {

            alert('Atenção esta conta é inválida');
                return;
        }
    }

}

const calculadora = new Calculadora(); //Nova instancia 
calculadora.inicia(); //Chamo o método inicia dentro da função
