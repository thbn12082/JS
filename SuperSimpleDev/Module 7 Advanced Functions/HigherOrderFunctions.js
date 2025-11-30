function createMultiple(factor) {
    return (number) => number * factor;
}
let double = createMultiple(2);
let triple = createMultiple(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15