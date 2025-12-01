import { PI, addNumber } from './mathUtils.js';
import User from 'User.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


console.log("Value of PI:", PI);
console.log("Addition of 5 and 3:", addNumber(5, 3));

// Note: The substract function is not imported and thus cannot be used here.

const user = new User('The Binh');
console.log("User Name:", user.name);


const today = dayjs();
console.log("Today is:", now.format("DD/MM/YYYY"));