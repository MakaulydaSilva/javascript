const display = document.getElementById('display');

//Seleciono as teclas e os operadores da calculadoras usando o * , que seleciona todoas as ids com essa nomeclatura
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*= operador]');

//Variavel, que guardara na memória o numero anteior depois de chamar o operador no display
let numeroAnterior;
//Variavel vazia, que guardara o operador para fazer os calculos
let operador;
//Variavel boolean, se valor for true ela não ira concatenar, ira fazer um novo numero, se for false, ela concatena para aumentar o valor do numero no display
let novoNumero = true;

//Função que fará o calculo
const calcular = () => {
    //Se algum operador for chamado faça...
    if (operacaoPendente()) {
        //Variavel que será um dos numeros a ser calculado no display
        const numeroAtual = parseFloat(display.textContent.replace(',', '.'));
        // True = ele mostrara um novo numero para não concatenar
        novoNumero = true;

        //eval = irá transformar o display em um gerador de JS fazendo assim os calculos como no programa, chamando o os numeros com o operador no template string
        let resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
        //Chamo a função que atualiza o display com o boolean para concatenar ou não
        
        atualizarDisplay(resultado);
        nan(resultado);
    }
}

// Operador é undefined até o momento que é chamado , aqui ele ativa caso seja diferente de undefined
const operacaoPendente = () => operador !== undefined;

//Função que fara o display concatenar os numeros ou não dependnedo da ação do operador
const atualizarDisplay = (texto) => {
    if (novoNumero) {
        //tolocalstring para ficar no padrao brasileiro e ler virgulas nos numeros
        display.textContent = texto.toLocaleString('BR');
        //Ira concatenar por ser um = false
        novoNumero = false;
    } else {
        display.textContent += texto.toLocaleString('BR');
    }
}

//Função que recebera o evento do clique e colocara o texto no display
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

// Para cada numero coloque o evento de clique no inserir numero
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

//Se não for um novo numero calcule, chama operador  com o evento que sera criado
const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent.replace(',', '.'));
    }
}

//Crio p evento de click para operador
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

//Funçcao para fazer o calculo pelo botao ou click 
const ativarIgual = () => {
    calcular();
    operador = undefined;
}
//Crio o evento de click do botao igual
document.getElementById('igual').addEventListener('click', ativarIgual);

//Limpa todo o conteudo do display atual
const limparDisplay = () => display.textContent = '';
document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

//Reseta toda a calculadora
const limpaCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById('limparCalculo').addEventListener('click', limpaCalculo);

// Remove o ultimo numero do display
const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1);
document.getElementById('backspace').addEventListener('click', removerUltimoNumero);

// Inverte o sinal dos numeros
const inverterSinal = () => {
    novoNumero = true
    atualizarDisplay(display.textContent * -1);
}
document.getElementById('inverter').addEventListener('click', inverterSinal);

// Funções que colocara virgula quando usar o click ou botao da calculaora

//verifica se existe virgula com o indexOf
const existeDecimal = () => display.textContent.indexOf(',')
//verifica se o indice do display é maior que 0
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (existeValor()) {
            atualizarDisplay(',')
        }
    } else {
        //Se o botão for clicado com o display vazio ele adicionara o 0,
        atualizarDisplay('0,')
    }
}
//Chamo a função com o evento de click
document.getElementById('decimal').addEventListener('click', inserirDecimal);

//Crio os objetos para identificar as teclas apertdas com os id de cada botao
const mapaTeclado = {
// key              id
    '0'        : 'tecla0',
    '1'        : 'tecla1',
    '2'        : 'tecla2',
    '3'        : 'tecla3',
    '4'        : 'tecla4',
    '5'        : 'tecla5',
    '6'        : 'tecla6',
    '7'        : 'tecla7',
    '8'        : 'tecla8',
    '9'        : 'tecla9',
    '/'        : 'operadorDividir',
    '*'        : 'operadorMultiplicar',
    '-'        : 'operadorSubtrair',
    '+'        : 'operadorAdicionar',
    '='        : 'igual',
    'Enter'    : 'igual',
    'Backspace': 'backspace',
    'c'        : 'limparDisplay',
    'Escape'   : 'limparCalculo',
    ','        : 'decimal',
}

//Função que pega os eventos dos botoes, e somente os botoes listados no objeto
const mapearTeclado = (evento) => {
    const tecla = evento.key;
       
    //Seleciona as keys do objeto e com o indexOf !== -1 seleciona somente as key do objeto
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1; 
    // -1 é quando não existe
     
    //Seleciona o id do objeto mapateclado, se for tecla permitida mostra no input
    if(teclaPermitida())document.getElementById(mapaTeclado[tecla]).click();
}

//Ativa as teclas
document.addEventListener('keydown', mapearTeclado);
