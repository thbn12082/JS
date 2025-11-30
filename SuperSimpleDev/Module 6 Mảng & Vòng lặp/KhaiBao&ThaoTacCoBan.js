const myArr = ["an", false, 12];
console.log(myArr);

myArr.push("Hello");
myArr.splice(0, 1);

myArr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
})

myArr.forEach(value => console.log(value));

let price = [10, 20, 30, 40, 50, 60, 70];
price.filter(value => value > 30).forEach(value => console.log(value));

// tạo 1 mảng mới 
const newArr = price.map(value => value * 2);




let todoList = ['Học JS', 'Xem phim', 'Đi ngủ'];
todoList.push('Làm bài tập');
todoList.filter(task => task.includes('Học') || task.includes('bài tập')).forEach(task => console.log(task));




const cart = [
    { name: 'Sách JS', price: 20, quantity: 2 },
    { name: 'Bàn phím', price: 50, quantity: 1 },
    { name: 'Chuột', price: 10, quantity: 3 }
];

let sum = 0;
const totalPrice = cart.map(value => sum += Number(value.price) * Number(value.quantity))
console.log('Tổng tiền giỏ hàng:', sum);