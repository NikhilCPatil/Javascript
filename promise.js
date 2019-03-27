const fetch = require('node-fetch');


const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json())
    .then(user => console.log(user.title))
    .catch(error => console.error(error));

console.log(':)','Syncronous');