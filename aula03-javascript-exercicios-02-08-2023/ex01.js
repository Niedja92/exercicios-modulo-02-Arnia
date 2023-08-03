// Exercício 1: Dado o array de números [2, 4, 6, 8], utilize o método map para criar um novo array com os números elevados ao quadrado.

const numbers = [2, 4, 6, 8] //vetor

const squared = numbers.map(function(item) {
    return Math.pow(item, 2) //o valor Math.pow retorna a base x elevada à potência y do expoente
})

console.log(squared)