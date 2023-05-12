const leia = require('mclainsmt-cli-prompt')

const nome = leia('Digite seu nome: ');
const idade = leia('Digite sua idade: ');

console.log(`[Cartão de aniversario] 

Olá ${nome}!

Parabéns pelos seus ${idade} anos de idade!

`)