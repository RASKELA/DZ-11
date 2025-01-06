const fetch = require('node-fetch');

// Function to fetch a todo
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch todo: ${response.status}`);
            }
            return response.json();
        });
}

// Function to fetch a user
function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user: ${response.status}`);
            }
            return response.json();
        });
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Promise.all Results:', { todo, user });
    })
    .catch(error => console.error('Error with Promise.all:', error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('Promise.race Result:', result);
    })
    .catch(error => console.error('Error with Promise.race:', error));
