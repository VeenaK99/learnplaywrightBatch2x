// 83_arrays_02.js
// More array methods

let nums = [10, 20, 30, 40, 50];

// indexOf - find index of an element
console.log(nums.indexOf(30)); // 2
console.log(nums.indexOf(99)); // -1 (not found)

// includes - check if element exists
console.log(nums.includes(20)); // true
console.log(nums.includes(99)); // false

// join - convert array to string
console.log(nums.join(" @ ")); // "10 - 20 - 30 - 40 - 50"

// reverse - reverse the array
let reversed = nums.slice().reverse();
console.log(reversed); // [50, 40, 30, 20, 10]

// // concat - merge arrays
let moreNums = [60, 70];
let allNums = nums.concat(moreNums);
console.log(allNums);

// // Checking if something is an array
console.log(Array.isArray(nums)); // true
console.log(Array.isArray("hello")); // false

let chars = Array.from("4567819");
console.log(chars);
