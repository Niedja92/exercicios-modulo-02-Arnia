// Exercício 10: Crie uma função que recebe o seguinte array de objetos representando produtos:
// Utilize o método map para criar um novo array com o preço dos produtos após aplicar o desconto.

//obs.: utilizar regra de três
//sintaxe: 
//array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])


function discount () {
  const produtos = [
    { nome: "Camiseta", preco: 20, desconto: 0.1 },
    { nome: "Calça", preco: 50, desconto: 0.2 },
    { nome: "Tênis", preco: 80, desconto: 0.15 }
  ];

  return produtos.map(produto => {
    return {
      nome: produto.nome,
      precoComDesconto: produto.preco - (produto.preco * produto.desconto)
    }
  })
}

console.log(discount())



  