//Funçóes executa ações

function saudacao(nome) { //Parâmetros vai dentro dos parênteses
    return `Bom dia ${nome}` // Isto é oque será retornado, neste caso eu salvei na variável
     //Não consigo acessar essas informações fora da função
}

//Existe funções que não retornan valor, isto é comum no javascript

saudacao('João'); // Neste momento eu quero que esta função seja executada. Crio um argumento para o parâmetro
saudacao('Sebastião');
saudacao('Lindu'); //O parâmetro pode ser usado varias vezes e com diferentes valores

const variavel = saudacao('Zeca'); //Quero salvar na variável oque esta retornando nesta função, o que sera salvo nesta variável irá vir do return

console.log(variavel);