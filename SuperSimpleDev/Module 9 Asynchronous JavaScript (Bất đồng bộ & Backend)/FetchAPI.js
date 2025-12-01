async function getProducts() {
    try {
        const response = await fetch('https://api.example.com/products');
        const products = await response.json();

    } catch (error) {
        console.log('Error fetching products:', error);
    }
}