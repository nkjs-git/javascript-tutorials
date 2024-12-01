// Number seperator
let nb = 1_000_000; // 1000000 (1 million)

// Convert Number to string
let answer = 42;
answer.toString();

// You may sometimes encounter NaN which stands for Not a Number. For example, if you try to multiply a number by a string (which you should not do):
console.log("abc" * 4); // NaN

// Convert from a number to string: value.toString()
// NaN stands for Not a Number
// NaN is often a sign of a bug.

// Convert string to number
let str = "42";
console.log(Number.parseInt(str, 10))

// Add between Number and string
let a = 10;
let b = "20"; // we forgot to convert it to a number
console.log(a + b);

// Convert from string to number Number.parseInt(value, 10).
// Number.parseInt() is the name of the function you're calling.
// 10 is the radix which you should specify.
// Make sure to always specify the radix to avoid unpleasant surprises
console.log(Number.parseInt("123abc", 10)); // 123
console.log(Number.parseInt("5 meters", 10)); // 5

Math.round(2.1); // 2
Math.round(2.6); // 3
Math.round(2.5); // 3

Math.floor(2.1); // 2
Math.floor(2.6); // 2
Math.floor(2.5); // 2

Math.ceil(2.1); // 3
Math.ceil(2.6); // 3
Math.ceil(2.5); // 3

const array1 = [1, 3, 2]
console.log(Math.max(...array1))