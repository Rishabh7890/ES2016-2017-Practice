// jshint esversion: 8

// 2 useful string methods from ES2017 -- padStart padEnd

// padStart
// - allows us to place a certain character a number of times before start of a string
// - first param is total length of new string
// - second param is what to pad with from the start. Default is empty space
// - useful when you need strings of all same length
console.log("pad this string".padStart(20)); //      pad this string
console.log("pad this with $".padStart(20, "$")); // $$$$$pad this with $

// padEnd is similar but allows us to pad at the end instead of start
console.log("pad this string with! ".padEnd(30, "!")); // pad this string with! !!!!!!!!
