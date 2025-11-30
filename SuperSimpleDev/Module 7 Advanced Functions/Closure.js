function createCounter() {
    let cnt = 0;
    return () => {
        cnt++;
        console.log(cnt);
    }
}

let cnt = createCounter();
createCounter();
createCounter();


const products = [
    { name: 'Áo thun', priceUSD: 10 },
    { name: 'Quần Jeans', priceUSD: 30 },
    { name: 'Giày', priceUSD: 50 }
];

const exchangeProductsToVND = products.map(products => ({
    name: products.name,
    priceVND: products.priceUSD * 24000
}));