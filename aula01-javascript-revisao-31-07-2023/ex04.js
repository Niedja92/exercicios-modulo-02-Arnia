// Escreva uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve aplicar a função de callback a cada palavra do array e retornar um novo array contendo apenas as palavras que satisfazem a condição definida pela função de callback.
// Exemplo de uso:

function filtrarPalavras (palavras, cb) {
    return palavras.filter(item => cb(item))
}

const verificarTamanho = palavra => palavra.length > 5;
const palavras = ['casa', 'carro', 'bicicleta', 'abacaxi', 'livro'];
const resultado = filtrarPalavras(palavras, verificarTamanho);
console.log(resultado); // Output: ['bicicleta', 'abacaxi']