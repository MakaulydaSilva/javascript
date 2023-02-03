function soma(x = 1, y = 1) { //O parâmetro recebeu 2 valores, eu posso assumir que os parâmetro possuem valor (neste caso 1 e 1), caso eu não assuma um valor na hora de trabalhar na função
     const resultado = x + y;
     return resultado; //Não consigo alterar nada da função fora do escopo da função
}

const resultado = soma(2, 2); //Inclusive eu posso redeclarar uma variável com o mesmo nome da de dentro da função, pois uma não se conflita com a outra pois estão em escopos diferentes

console.log(resultado)

