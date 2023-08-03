// Exercício 11: Dado o array de objetos com propriedades nome e salario:
// Crie uma função que utilize o método reduce para calcular o salário total de todos os funcionários.
//Obs.: método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

function wage () {
  const funcionarios = [
    { nome: "João", salario: 2500 },
    { nome: "Maria", salario: 3000 },
    { nome: "Carlos", salario: 2200 }
  ];

  return funcionarios.reduce((a, b) => a + b.salario, 0)
}

console.log(wage())

