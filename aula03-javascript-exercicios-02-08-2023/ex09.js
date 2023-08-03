// Exercício 9: Dado o array de números [3, 7, 1, 9], crie uma função que utiliza o método forEach para imprimir o dobro de cada número.

//obs.: usar forEach

function doubleNumber () {
    const numbers = [3, 7, 1, 9] 
    const arr = []

    numbers.forEach(number => {
        arr.push(number * 2)            //o método push() adiciona um ou mais elementos ao final de um array e retorna o novo cumprimento desse array
    });

    return arr
}

console.log(doubleNumber())