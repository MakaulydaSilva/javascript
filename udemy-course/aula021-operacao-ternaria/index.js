// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso' ;

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

//Ao não selecionar nenhuma cor é setado pra ele a cor padrão neste caso preta
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }