// Exercício 6: Crie uma função que recebe o seguinte objeto:

// const operacoes = {
//   a: 10,
//   b: 5,
//   callback: function(a, b) {
//     return a + b;
//   }
// };
// A função deve chamar a callback passando as propriedades a e b como argumentos e retornar o resultado.

function objeto () {
  const operacoes = {
    a: 10,
    b: 5,
    callback: function(a, b) {
      return a + b;
    }
  };

  function fn (obj) {
    const {a, b, callback} = obj

    return callback(a, b)
  }
    return fn(operacoes)
}


console.log(objeto())