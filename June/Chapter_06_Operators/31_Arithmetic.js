// JavaScript Arithmetic Operators
// Used to perform arithmetic operations on numbers

// ==================== Basic Arithmetic Operators ====================

// Addition (+)
const sum = 5 + 3;
console.log(`5 + 3 = ${sum}`); // 8

// Subtraction (-)
const difference = 10 - 4;
console.log(`10 - 4 = ${difference}`); // 6

// Multiplication (*)
const product = 4 * 3;
console.log(`4 * 3 = ${product}`); // 12

// Division (/)
const quotient = 15 / 3;
console.log(`15 / 3 = ${quotient}`); // 5

// Modulus/Remainder (%)
const remainder = 17 % 5;
console.log(`17 % 5 = ${remainder}`); // 2

// Exponentiation (**)
const power = 2 ** 3;
console.log(`2 ** 3 = ${power}`); // 8

// ==================== Increment and Decrement ====================

let counter = 10;

// Pre-increment (++x) - increment then return
console.log(`++counter: ${++counter}`); // 11 (counter is now 11)

// Post-increment (x++) - return then increment
console.log(`counter++: ${counter++}`); // 11 (counter is now 12)
console.log(`counter after: ${counter}`); // 12

// Pre-decrement (--x)
console.log(`--counter: ${--counter}`); // 11

// Post-decrement (x--)
console.log(`counter--: ${counter--}`); // 11 (counter is now 10)

// ==================== Operator Precedence ====================
// 1. Parentheses ()
// 2. Exponentiation (**)
// 3. Multiplication, Division, Modulus (* / %)
// 4. Addition, Subtraction (+ -)

const result = 10 + 5 * 2; // 20 (not 30)
console.log(`10 + 5 * 2 = ${result}`);

const withParens = (10 + 5) * 2; // 30
console.log(`(10 + 5) * 2 = ${withParens}`);

// ==================== Special Cases ====================

// Division by zero
console.log(`10 / 0 = ${10 / 0}`); // Infinity
console.log(`-10 / 0 = ${-10 / 0}`); // -Infinity
console.log(`0 / 0 = ${0 / 0}`); // NaN

// String concatenation with numbers
console.log(`"5" + 3 = ${"5" + 3}`); // "53" (string concatenation)
console.log(`5 + "3" = ${5 + "3"}`); // "53" (string concatenation)
console.log(`5 - "3" = ${5 - "3"}`); // 2 (numeric subtraction)
console.log(`5 * "3" = ${5 * "3"}`); // 15 (numeric multiplication)

// ==================== Assignment with Operations ====================

let num = 10;

num += 5;  // num = num + 5
console.log(`After += 5: ${num}`); // 15

num -= 3;  // num = num - 3
console.log(`After -= 3: ${num}`); // 12

num *= 2;  // num = num * 2
console.log(`After *= 2: ${num}`); // 24

num /= 4;  // num = num / 4
console.log(`After /= 4: ${num}`); // 6

num %= 4;  // num = num % 4
console.log(`After %= 4: ${num}`); // 2

num **= 3; // num = num ** 3
console.log(`After **= 3: ${num}`); // 8

// ==================== Practical Examples ====================

// Calculate area of rectangle
const width = 10;
const height = 5;
const area = width * height;
console.log(`Area: ${area}`); // 50

// Calculate average
const scores = [85, 90, 78, 92, 88];
const average = scores.reduce((a, b) => a + b, 0) / scores.length;
console.log(`Average: ${average}`); // 86.6

// Check if number is even or odd
const number = 15;
const isEven = number % 2 === 0;
console.log(`${number} is ${isEven ? "even" : "odd"}`); // odd

// Convert temperature (Celsius to Fahrenheit)
const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`); // 77°F

// ==================== Exercises ====================

// Q1: Calculate the total price including 8% tax for an item costing $50
// const price = 50;
// const taxRate = 0.08;
// const total = ...

// Q2: Swap two variables without using a temporary variable
// let a = 5, b = 10;
// Hint: Use arithmetic operations

// Q3: Calculate minutes from a given number of seconds
// const seconds = 125;
// const minutes = ...

// ==================== Key Takeaways ====================
// +  Addition
// -  Subtraction
// *  Multiplication
// /  Division
// %  Modulus (remainder)
// ** Exponentiation
// ++ Increment
// -- Decrement

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
let a = 19, b = 1;

console.log("a:", a, "b:", b);
let sum1 = a + b;

console.log(sum);

let diff1 = a - b;
let div = a / b;
let mult = a * b;

console.log('sum', sum1, 'difference', diff1, 'division', div, 'multiplication', mult);
