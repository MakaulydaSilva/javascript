/*
try {
    // É executada quando não há erros
    } catch (error) {
    // É executada quando há erro
    } finally {
        // Sempre é executado
    }
*/
    try {
        console.log('Abri um arquivo');
        console.log('Manipulei o arquivo normalmente');
        console.log('Fechei o arquivo');
    

        try {
           console.log(xxxx) // Erro

        } catch (error) {
           console.log('Tratando o erro'); // Aqui o erro sera executado pois o try esta com erro
        } finally {
            console.log('FINALLY: Serei sempre executado com erro ou sem erro');
        }

    } catch(error) {
        console.log('Deu erro') // Aqui não dará erro o try está funcionando
    
    } finally {
        console.log('FINALLY: Eu sempre sou executado');
    }