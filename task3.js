const fetch = require('node-fetch');

// Function to fetch a todo
async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
        throw new Error(`Failed to fetch todo: ${response.status}`);
    }
    return response.json();
}

// Function to fetch a user
async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
    }
    return response.json();
}

async function main() {
    try {
        const results = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Promise.all Results:', { todo: results[0], user: results[1] });

        const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Promise.race Result:', raceResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
