try {
    // É executada quando não há erros
} catch (error) {
    // É executada quando há erros
} finally {
    // Sempre é executado
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instanciância de Date.');
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
    const data = new Date('01-01-1970 12:58:13');
    const hora = retornaHora();
    console.log(hora);
} catch (error) {
    console.log(error);
} finally {
    console.log('Tenha um bom dia.')
}
 