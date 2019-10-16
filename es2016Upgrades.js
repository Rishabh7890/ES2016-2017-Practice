// jshint esversion: 7

// Exponentiation Operator
// instead of using Math.pow(), we can use **
const exp = 2 ** 4;
console.log(exp); // 16

// can also use it with an =
const arr = [1, 2, 3, 4, 5];
let baseNum = 2;

baseNum **= arr.length;
console.log(baseNum); // 32

// Arrays have includes method as well just like strings from es2015
// [].includes
// useful replacement for .indexOf()
arr.includes(3); // true
