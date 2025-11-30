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

