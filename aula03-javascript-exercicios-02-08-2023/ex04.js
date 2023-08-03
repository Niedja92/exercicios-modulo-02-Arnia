// Exercício 4: Crie uma função que recebe os seguintes arrays de números:
// const numeros1 = [1, 2, 3];
// const numeros2 = [4, 5, 6];
// Utilize o operador spread para criar um terceiro array que contém todos os números dos dois arrays anteriores.

const newArray = (numeros1, numeros2) => {
    return [...numeros1, ...numeros2]
}

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const newArrayNumbers = newArray(numeros1, numeros2);
console.log(newArrayNumbers)

//ou pode ficar assim também: console.log(newArray(numeros1, numeros2))