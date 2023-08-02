// Escreva uma função chamada somarValores que recebe um array de números e retorna a soma de todos os valores do array utilizando a função reduce.

const numeros = [1, 2, 3, 4, 5]
const somarValores = numeros.reduce(function(somarValores, numero) {
    return somarValores + numero;
}, 0);
console.log(somarValores)