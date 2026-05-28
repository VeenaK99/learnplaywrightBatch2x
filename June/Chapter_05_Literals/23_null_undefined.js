// ============================================
// NULL vs UNDEFINED in JavaScript
// ============================================

/*
 * SIMPLE EXPLANATION:
 * 
 * undefined = "I don't exist yet" (automatically assigned by JS)
 * null      = "I exist but I have nothing" (intentionally set by programmer)
 * 
 */

// --------------------------------------------
// 1. UNDEFINED - Default value
// --------------------------------------------

// Variable declared but not assigned
let name;
console.log(name);  // undefined

// Function with no return statement
function sayHello() {
    // no return
}
console.log(sayHello());  // undefined

// Accessing non-existent object property
let person = { age: 25 };
console.log(person.name);  // undefined

// --------------------------------------------
// 2. NULL - Intentional empty value
// --------------------------------------------

// Programmer explicitly sets "no value"
let user = null;
console.log(user);  // null

// Example: Reset a variable
let data = "some data";
data = null;  // "I cleared this intentionally"
console.log(data);  // null

// --------------------------------------------
// 3. KEY DIFFERENCES
// --------------------------------------------

console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (this is a known JS bug!)

console.log(undefined == null);   // true  (loose equality)
console.log(undefined === null);  // false (strict equality - different types)

// --------------------------------------------
// 4. REAL-WORLD ANALOGY
// --------------------------------------------

/*
 * UNDEFINED = Empty box that was never opened
 * NULL      = Box you opened and deliberately left empty
 * 
 * Example:
 * - let x;        → Box exists but you never put anything in it (undefined)
 * - let y = null; → You opened the box and said "keep this empty" (null)
 */

// --------------------------------------------
// 5. QUICK CHECK
// --------------------------------------------

let a;           // undefined (automatic)
let b = null;    // null (manual)

console.log("a is:", a);  // undefined
console.log("b is:", b);  // null
