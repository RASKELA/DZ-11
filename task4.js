const fetch = require('node-fetch');

class TodoFetcher {
    static async fetch() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`Failed to fetch todo: ${response.status}`);
        }
        return response.json();
    }
}

class UserFetcher {
    static async fetch() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error(`Failed to fetch user: ${response.status}`);
        }
        return response.json();
    }
}

async function main() {
    try {
        const results = await Promise.all([TodoFetcher.fetch(), UserFetcher.fetch()]);
        console.log('Promise.all Results:', { todo: results[0], user: results[1] });

        const raceResult = await Promise.race([TodoFetcher.fetch(), UserFetcher.fetch()]);
        console.log('Promise.race Result:', raceResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
