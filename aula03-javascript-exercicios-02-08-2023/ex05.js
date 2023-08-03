// Exercício 5: Dado o array de strings ["Olá", "Mundo", "Javascript"], utilize o método reduce para concatenar todas as strings em uma única string.

function addStrings () {
    return ["Olá", "Mundo", "Javascript"].reduce((acc, curr) => {
        return acc + curr + ' '
    }, '')
}

console.log(addStrings())