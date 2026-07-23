// Loops in JavaScript
// Loops are used to execute a block of code repeatedly

// 1. for loop
// for (initialization; condition; increment/decrement)

console.log("=== for loop ===");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// 2. while loop
console.log("\n=== while loop ===");
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}

// // 3. do...while loop - executes at least once
// console.log("\n=== do...while loop ===");
// let num = 1;
// do {
//     console.log("Number:", num);
//     num++;
// } while (num <= 5);

// // 4. Looping through arrays
// console.log("\n=== looping through array ===");
// let fruits = ["Apple", "Banana", "Cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // 5. for...of loop (ES6) - for arrays
// console.log("\n=== for...of loop ===");
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// // 6. for...in loop - for objects
// console.log("\n=== for...in loop ===");
// let person = { name: "John", age: 25, city: "NYC" };
// for (let key in person) {
//     console.log(key + ":", person[key]);
// }

// // 7. break - exit loop early
// console.log("\n=== break ===");
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         console.log("Breaking at", i);
//         break;
//     }
//     console.log(i);
// }

// // 8. continue - skip current iteration
// console.log("\n=== continue ===");
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue; // skip 3
//     }
//     console.log(i);
// }

// // 9. Nested loops
// console.log("\n=== nested loops ===");
// for (let row = 1; row <= 3; row++) {
//     let line = "";
//     for (let col = 1; col <= row; col++) {
//         line += "* ";
//     }
//     console.log(line);
// }
