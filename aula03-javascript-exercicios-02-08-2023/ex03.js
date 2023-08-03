// Exercício 3: Dado o objeto:
// Utilize a destructuring para extrair e imprimir o valor da propriedade nome.

function desdructObject() {
    const pessoa = { nome: "Ana", idade: 28, cidade: "São Paulo" };
    const { nome } = pessoa;
    return nome
}

console.log(desdructObject()) //destruct pegando a propriedade nome(string)