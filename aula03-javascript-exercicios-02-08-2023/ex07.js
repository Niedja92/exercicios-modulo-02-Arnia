// Exercício 7: Dado o array de objetos com propriedades nome e idade:
// Utilize o método sort com uma função de comparação para ordenar os objetos por idade, do mais jovem para o mais velho.

function names () { // passa uma função com array de objetos dentro dela
  const pessoas = [
    { nome: "Carlos", idade: 30 },
    { nome: "Alice", idade: 25 },
    { nome: "Eduardo", idade: 40 }
  ];

  return pessoas.sort((a, b) => a.idade - b.idade) // retorna a variável passando o parâmetro, como uma função de comparação usando a subtração, que irá irá ordenar de forma crescente
}

console.log(names())
