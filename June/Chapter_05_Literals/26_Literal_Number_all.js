// ============================================
// ALL NUMBER TYPES IN JAVASCRIPT
// ============================================

/*
 * JavaScript has ONE number type: Number
 * It stores all numbers as 64-bit floating point (IEEE 754)
 * But we can write numbers in different formats/literals
 */

// --------------------------------------------
// 1. INTEGER LITERALS (Whole Numbers)
// --------------------------------------------

let positiveInt = 42;
let negativeInt = -42;
let zero = 0;

console.log("Positive Integer:", positiveInt);  // 42
console.log("Negative Integer:", negativeInt);  // -42
console.log("Zero:", zero);                     // 0

// --------------------------------------------
// 2. DECIMAL/FLOATING POINT LITERALS
// --------------------------------------------

let simpleDecimal = 3.14;
let negativeDecimal = -0.5;
let leadingZero = 0.99;
let trailingDecimal = 5.0;  // treated as 5

console.log("Simple Decimal:", simpleDecimal);      // 3.14
console.log("Negative Decimal:", negativeDecimal);  // -0.5
console.log("Leading Zero:", leadingZero);          // 0.99

// --------------------------------------------
// 3. SCIENTIFIC/EXPONENTIAL NOTATION
// --------------------------------------------

let largeNumber = 1.5e5;    // 1.5 × 10^5 = 150000
let smallNumber = 1.5e-5;   // 1.5 × 10^-5 = 0.000015
let million = 1e6;          // 1000000
let micro = 1e-6;           // 0.000001

console.log("1.5e5:", largeNumber);   // 150000
console.log("1.5e-5:", smallNumber);  // 0.000015
console.log("1e6:", million);           // 1000000

// --------------------------------------------
// 4. BINARY NUMBERS (Base 2)
// --------------------------------------------

let binary = 0b1010;   // 10 in decimal (1×2³ + 0×2² + 1×2¹ + 0×2⁰)
let binaryByte = 0b11111111;  // 255 in decimal

console.log("Binary 0b1010:", binary);        // 10
console.log("Binary 0b11111111:", binaryByte); // 255

// --------------------------------------------
// 5. OCTAL NUMBERS (Base 8)
// --------------------------------------------

let octal = 0o17;      // 15 in decimal (1×8¹ + 7×8⁰)
let octalModern = 0o755;  // 493 in decimal (file permissions style)

console.log("Octal 0o17:", octal);      // 15
console.log("Octal 0o755:", octalModern); // 493

// --------------------------------------------
// 6. HEXADECIMAL NUMBERS (Base 16)
// --------------------------------------------

let hex = 0xFF;        // 255 in decimal
let hexColor = 0xFF5733;  // Common in CSS colors
let hexSmall = 0xA;

console.log("Hex 0xFF:", hex);          // 255
console.log("Hex 0xFF5733:", hexColor);  // 16734003
console.log("Hex 0xA:", hexSmall);      // 10

// --------------------------------------------
// 7. SPECIAL NUMBER VALUES
// --------------------------------------------

// Infinity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let divideByZero = 1 / 0;

console.log("Infinity:", positiveInfinity);      // Infinity
console.log("-Infinity:", negativeInfinity);     // -Infinity
console.log("1 / 0:", divideByZero);             // Infinity

// NaN (Not a Number)
let notANumber = NaN;
let invalidMath = 0 / 0;
let parseError = Number("hello");

console.log("NaN:", notANumber);                 // NaN
console.log("0 / 0:", invalidMath);                 // NaN
console.log("Number('hello'):", parseError);       // NaN

// --------------------------------------------
// 8. CHECKING NUMBER TYPES
// --------------------------------------------

console.log("\n--- Type Checking ---");
console.log("typeof 42:", typeof 42);              // "number"
console.log("typeof 3.14:", typeof 3.14);            // "number"
console.log("typeof Infinity:", typeof Infinity);   // "number"
console.log("typeof NaN:", typeof NaN);              // "number" (surprise!)

// Check for NaN
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));           // true
console.log("Number.isNaN(42):", Number.isNaN(42));             // false

// Check for finite numbers
console.log("Number.isFinite(42):", Number.isFinite(42));       // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false

// Check if integer
console.log("Number.isInteger(42):", Number.isInteger(42));       // true
console.log("Number.isInteger(3.14):", Number.isInteger(3.14)); // false

// --------------------------------------------
// 9. NUMBER METHODS
// --------------------------------------------

console.log("\n--- Number Methods ---");

let num = 123.456;

console.log("num.toFixed(2):", num.toFixed(2));           // "123.46"
console.log("num.toPrecision(4):", num.toPrecision(4)); // "123.5"
console.log("num.toString():", num.toString());           // "123.456"
console.log("num.toString(2):", (255).toString(2));       // "11111111" (binary)
console.log("num.toString(16):", (255).toString(16));      // "ff" (hex)

// Parse strings to numbers
console.log("parseInt('42'):", parseInt("42"));             // 42
console.log("parseInt('FF', 16):", parseInt("FF", 16));     // 255
console.log("parseFloat('3.14'):", parseFloat("3.14"));     // 3.14

// --------------------------------------------
// 10. NUMBER LIMITS
// --------------------------------------------

console.log("\n--- Number Limits ---");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);           // ~1.8 × 10³⁰⁸
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);             // ~5 × 10⁻³²⁴
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);   // -9007199254740991
console.log("Number.EPSILON:", Number.EPSILON);                 // Smallest difference between numbers

// --------------------------------------------
// SUMMARY
// --------------------------------------------

/*
 * JavaScript Number Types Summary:
 * 
 * 1. Integers: 42, -10, 0
 * 2. Decimals: 3.14, -0.5
 * 3. Scientific: 1e5 (150000), 1e-5 (0.00001)
 * 4. Binary: 0b1010 (10)
 * 5. Octal: 0o17 (15)
 * 6. Hexadecimal: 0xFF (255)
 * 7. Special: Infinity, -Infinity, NaN
 * 
 * Remember: JavaScript has only ONE Number type (64-bit float)
 * All these are just different ways to WRITE numbers!
 */
