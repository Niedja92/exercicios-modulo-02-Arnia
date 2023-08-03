// Exercício 2: Crie uma função que recebe o seguinte array de objetos representando livros:
// Utilize o método filter para retornar um novo array contendo apenas os livros publicados antes de 2000.

const livros = [
  { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
  { titulo: "1984", autor: "George Orwell", ano: 1949 },
  { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 }
];

const yearBooks = livros.filter((livro) => livro.ano < 2000);
console.log(yearBooks)
