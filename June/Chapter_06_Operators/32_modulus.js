// JavaScript Modulus Operator (%)
// Returns the remainder after division of one number by another

// ==================== Basic Syntax ====================
// dividend % divisor = remainder

console.log(17 % 5);  // 2 (17 divided by 5 is 3 with remainder 2)
console.log(20 % 4);  // 0 (20 divided by 4 is 5 with remainder 0)
console.log(10 % 3);  // 1 (10 divided by 3 is 3 with remainder 1)

// ==================== Practical Use Cases ====================

// 1. Check if a number is even or odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}
console.log(checkEvenOdd(10)); // even
console.log(checkEvenOdd(7));  // odd

// 2. Check divisibility
function isDivisible(num, divisor) {
    return num % divisor === 0;
}
console.log(isDivisible(15, 3)); // true
console.log(isDivisible(17, 3)); // false

// 3. Circular array indexing (wrap around)
const colors = ["red", "green", "blue", "yellow"];
function getColor(index) {
    return colors[index % colors.length];
}
console.log(getColor(0));  // red
console.log(getColor(4));  // red (wraps around)
console.log(getColor(7));  // yellow

// 4. Limit a number to a range (0 to max-1)
function wrap(value, max) {
    return ((value % max) + max) % max; // Handles negative numbers
}
console.log(wrap(5, 3));   // 2
console.log(wrap(-1, 3));  // 2

// 5. Format time (convert seconds to minutes:seconds)
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
console.log(formatTime(125));  // 2:05
console.log(formatTime(3661)); // 61:01

// 6. Create alternating patterns
for (let i = 0; i < 6; i++) {
    console.log(i % 2 === 0 ? "A" : "B"); // A, B, A, B, A, B
}

// ==================== Special Cases ====================

// Modulus with negative numbers
console.log(10 % 3);   // 1
console.log(-10 % 3);  // -1
console.log(10 % -3);  // 1
console.log(-10 % -3); // -1

// Modulus with decimals
console.log(10.5 % 3);  // 1.5
console.log(7.25 % 2.5); // 0.25

// Modulus with zero (NaN)
console.log(10 % 0);   // NaN

// ==================== Common Patterns ====================

// Get last digit of a number
const num = 1234;
const lastDigit = num % 10;
console.log(`Last digit of ${num} is ${lastDigit}`); // 4

// Check leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true

// Group items into rows/columns
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const itemsPerRow = 3;
items.forEach((item, index) => {
    const column = index % itemsPerRow;
    console.log(`Item ${item} at column ${column}`);
});

// ==================== Exercises ====================

// Q1: Write a function that returns true if a number is divisible by both 3 and 5
// function divisibleBy3And5(num) { ... }

// Q2: Create a function that converts a number to binary using modulus
// Hint: Repeatedly divide by 2 and collect remainders

// Q3: Write a function that finds the greatest common divisor (GCD) using the Euclidean algorithm
// function gcd(a, b) { ... }

// ==================== Key Takeaways ====================
// - a % b returns the remainder of a divided by b
// - num % 2 === 0 checks for even numbers
// - Useful for circular/wrapping behavior
// - Great for grouping items or creating patterns
// - Works with negative numbers and decimals
