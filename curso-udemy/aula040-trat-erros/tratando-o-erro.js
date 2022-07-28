function retornaHora(data) {
    if (data && !(data instanceof Date)) { // instanceof -> procura o mesmo tipo de instancia construtora
        throw new TypeError('Esperando instância de Date');
         
    }
      
    if (!data) {
        data = new Date();
    }
 
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora(); // Erro
console.log(hora);
} catch (error) {
    console.log('Para a função funcionar por favor adicione um instância de "Date"'); //Tratando o erro
} finally {
    console.log('Tenha um bom dia');
}
