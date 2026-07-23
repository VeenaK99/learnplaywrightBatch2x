// 83_arrays.js
// Arrays - used to store multiple values in a single variable

// Creating an array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// Accessing array elements using index (starts from 0)
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry

console.log(fruits[6]);// undefined

// // Array length property
console.log("Total fruits:", fruits.length);

// // Changing an element
fruits[1] = "blueberry";
console.log(fruits);

// // Adding elements
fruits.push("dates");    // add to end
fruits.unshift("apricot"); // add to beginning
console.log(fruits);

// // Removing elements
fruits.pop();   // remove from end
fruits.shift(); // remove from beginning
console.log(fruits);
