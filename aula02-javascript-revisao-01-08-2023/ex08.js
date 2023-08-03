// Reimplemente a função fetch para usar só um then e já retornar direto os dados do json.
// // Exemplo de uso
// newFetch('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response))

// // Output {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

newFetch('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response))

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }