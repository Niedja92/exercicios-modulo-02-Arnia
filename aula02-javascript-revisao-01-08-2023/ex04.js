// 4) Escreva uma função que receba um objeto e um array de strings contendo os nomes das propriedades a serem removidas desse objeto.
// Exemplo de uso
const person = { name: 'John', age: 30, city: 'New York' };
const propertiesToRemove = ['age', 'city'];
const newPerson = removeProperties(person, propertiesToRemove);
console.log(newPerson); // Output: { name: 'John' }