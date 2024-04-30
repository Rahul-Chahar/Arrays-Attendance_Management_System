fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))

* Ouput
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}




# using Async and Await
async function getData(){
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const data = await res.json();
console.log(data);
}
getData();

