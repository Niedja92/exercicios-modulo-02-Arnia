// Exercício 5: Dado o array de strings ["Olá", "Mundo", "Javascript"], utilize o método reduce para concatenar todas as strings em uma única string.

const strings = ["Olá", "Mundo", "Javascript"]

const addStrings = strings.reduce(function(addStrings, string) {
    return addStrings + string
})

console.log(addStrings)
