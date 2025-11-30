person1 = { name: 'Binh' };
person2 = person1;
person2.name = "Nguyen The Binh";
console.log(person1.name); // Nguyen The Binh - vì person1 và person2 cùng tham chiếu đến 1 object trong bộ nhớ