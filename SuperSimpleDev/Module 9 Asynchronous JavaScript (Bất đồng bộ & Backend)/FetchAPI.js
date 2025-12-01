async function getProducts() {
    try {
        const response = await fetch('https://api.example.com/products');
        const products = await response.json();

    } catch (error) {
        console.log('Error fetching products:', error);
    }
}

async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();
        console.log('Fetched todo:', todo);
    } catch (error) {
        console.log('Error fetching todo:', error);
    }
}