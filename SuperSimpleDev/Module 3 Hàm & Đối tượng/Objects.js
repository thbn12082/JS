const user = {
    name: "Nguyen The Binh",
    age: 22,
    greet: function () {
        console.log("Hello" + this.name);
    }
};

console.log(user.name);
user.greet();

user.email = "Thebinh@gmail.com";
delete user.age;

console.log(user);
