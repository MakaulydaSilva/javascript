// (condição) ? 'Valor para verdadeiro : Valor para falso;  [Operação ternária]

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

const corUsuario = 'red';
const corPadrao = corUsuario || 'Preta'; // Setando um valor padrão para esta variavel (fallback), 

console.log(corPadrao);
/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}
*/