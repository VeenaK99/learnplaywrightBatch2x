// JavaScript: == vs === (Loose vs Strict Equality)
// Understanding the difference between loose equality (==) and strict equality (===)

// ==================== THE GOLDEN RULE ====================
// ALWAYS USE === (strict equality) unless you have a specific reason not to
// === checks both VALUE and TYPE
// == checks VALUE after TYPE COERCION (conversion)

// ==================== Strict Equality (===) ====================
// Compares VALUE and TYPE - no type conversion happens

console.log("=== STRICT EQUALITY (===) ===");
console.log(5 === 5);        // true - same value, same type
console.log("5" === "5");    // true - same value, same type
console.log(5 === "5");      // false - same value, DIFFERENT type (number vs string)
console.log(true === 1);     // false - different types
console.log(null === undefined); // false - different types
console.log(0 === false);    // false - different types

// ==================== Loose Equality (==) ====================
// Compares VALUE after TYPE COERCION - JavaScript tries to convert types first

console.log("\n=== LOOSE EQUALITY (==) ===");
console.log(5 == 5);         // true - same value
console.log("5" == "5");     // true - same value
console.log(5 == "5");       // true! - "5" converted to 5, then compared
console.log(true == 1);      // true! - 1 converted to true
console.log(false == 0);     // true! - 0 converted to false
console.log(null == undefined); // true! - special case in JS
console.log("" == 0);        // true! - empty string converted to 0
console.log("" == false);    // true! - both convert to 0

// ==================== CONFUSING EXAMPLES ====================

console.log("\n=== CONFUSING CASES WITH == ===");

// String to Number conversion
console.log("0" == 0);           // true
console.log("0" == false);       // true
console.log("1" == true);        // true
console.log("2" == true);        // false! (2 != 1)
console.log("2" == false);       // false

// Array/Object conversion
console.log([] == false);        // true! (empty array -> empty string -> 0 -> false)
console.log([] == 0);            // true
console.log([1] == 1);           // true! ([1] -> "1" -> 1)
console.log([1,2] == "1,2");     // true! (array -> string)

// Object to primitive
console.log({} == "[object Object]"); // true
console.log({} == false);        // false ({} -> "[object Object]" -> NaN)

// null and undefined
console.log(null == 0);          // false! (null only equals undefined with ==)
console.log(undefined == 0);     // false
console.log(null == null);       // true
console.log(undefined == undefined); // true

// ==================== NaN (Not a Number) ====================

console.log("\n=== NaN (NOT A NUMBER) ===");

// NaN is a special value representing "Not a Number"
// It is returned when a math operation fails

console.log(0 / 0);              // NaN
console.log("hello" * 5);        // NaN
console.log(Math.sqrt(-1));      // NaN
console.log(parseInt("not a number")); // NaN

// CRITICAL: NaN is NEVER equal to anything, including itself!
console.log(NaN == NaN);         // false
console.log(NaN === NaN);       // false

// How to check for NaN
console.log(isNaN(NaN));         // true
console.log(isNaN("hello"));     // true (coerces to number first)
console.log(isNaN(123));         // false

// Better: Number.isNaN() - doesn't coerce
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN("hello"));   // false (string is not NaN)
console.log(Number.isNaN(123));     // false

// NaN with loose equality
console.log(NaN == 0);           // false
console.log(NaN == false);       // false
console.log(NaN == null);        // false
console.log(NaN == undefined);   // false

// ==================== typeof Operator ====================

console.log("\n=== typeof OPERATOR ===");
// typeof returns a string indicating the type of the operand

// Primitives
console.log(typeof 42);              // "number"
console.log(typeof 3.14);            // "number"
console.log(typeof "hello");          // "string"
console.log(typeof true);             // "boolean"
console.log(typeof undefined);        // "undefined"
console.log(typeof 123n);             // "bigint"
console.log(typeof Symbol());         // "symbol"

// Objects and special cases
console.log(typeof {});               // "object"
console.log(typeof []);               // "object" (arrays are objects!)
console.log(typeof null);             // "object" (HISTORICAL BUG in JS!)
console.log(typeof function(){});     // "function"

// typeof with NaN
console.log(typeof NaN);             // "number" (NaN is technically a number!)

// typeof in comparisons
console.log(typeof 42 === "number");        // true
console.log(typeof "42" === "number");      // false
console.log(typeof [] === "object");        // true
console.log(typeof [] === "array");         // false (no "array" type!)

// Checking if something is an array
console.log(Array.isArray([]));       // true
console.log(Array.isArray({}));       // false

// typeof null bug demonstration
console.log(null === null);           // true
console.log(typeof null === "object"); // true (bug!)
console.log(null === undefined);      // false

// ==================== Combining typeof and Comparison ====================

console.log("\n=== typeof + COMPARISON EXAMPLES ===");

// Safe type checking
function addNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: Both arguments must be numbers";
    }
    return a + b;
}

console.log(addNumbers(5, 10));       // 15
console.log(addNumbers("5", 10));     // Error

// Checking for NaN safely
function safeDivide(a, b) {
    const result = a / b;
    if (Number.isNaN(result)) {
        return "Error: Result is NaN";
    }
    return result;
}

console.log(safeDivide(0, 0));        // Error: Result is NaN
console.log(safeDivide(10, 2));       // 5

// ==================== PRACTICAL COMPARISON TABLE ====================

console.log("\n=== COMPARISON TABLE ===");
console.log("Expression        | ==     | ===");
console.log("------------------|--------|------");
console.log("5 == 5            |", 5 == 5, "  |", 5 === 5);
console.log("5 == '5'          |", 5 == '5', "  |", 5 === '5');
console.log("0 == false        |", 0 == false, "  |", 0 === false);
console.log("'' == 0           |", '' == 0, "  |", '' === 0);
console.log("null == undefined |", null == undefined, "  |", null === undefined);
console.log("[] == false       |", [] == false, "  |", [] === false);
console.log("'0' == false      |", '0' == false, "  |", '0' === false);
console.log("NaN == NaN        |", NaN == NaN, " |", NaN === NaN);

// ==================== WHEN TO USE WHAT? ====================

console.log("\n=== BEST PRACTICES ===");

// 1. ALWAYS use === by default
const userAge = "25";
if (userAge === 25) {
    console.log("Age is exactly 25");
} else {
    console.log("Age is not 25 (or not a number)");
}

// 2. Use == only when intentionally checking null/undefined together
function checkValue(value) {
    // This checks for both null and undefined
    if (value == null) {
        console.log("Value is null or undefined");
    }
    // Equivalent to: if (value === null || value === undefined)
}

checkValue(null);      // "Value is null or undefined"
checkValue(undefined); // "Value is null or undefined"
checkValue(0);         // (nothing - 0 is not null/undefined)

// 3. Comparing objects/arrays - reference equality
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log(arr1 == arr2);   // false (different references)
console.log(arr1 === arr2);  // false (different references)
console.log(arr1 == arr3);   // true (same reference)
console.log(arr1 === arr3);  // true (same reference)

// ==================== COMMON BUGS WITH == ====================

console.log("\n=== COMMON BUGS ===");

// Bug 1: Empty string vs zero
function processInput(input) {
    if (input == 0) {
        console.log("Input is zero");
    }
}
processInput("");  // "Input is zero" - BUG! Empty string equals 0 with ==

// Bug 2: String "false" vs boolean false
const flag = "false";  // From user input or API
if (flag == false) {
    console.log("Flag is false");  // Won't print - "false" string is truthy
}

// Bug 3: Array comparison
if ([] == false) {
    console.log("Empty array is falsy");  // Prints! But [] is truthy in boolean context
}

// Bug 4: typeof null
if (typeof someVar === "object") {
    // This will be true for null too!
    console.log("null has typeof 'object' - be careful!");
}

// ==================== SUMMARY ====================

console.log("\n=== SUMMARY ===");
console.log("Use === (strict equality) ALWAYS unless:");
console.log("1. You specifically want type coercion");
console.log("2. You're checking for both null and undefined together");
console.log("");
console.log("=== vs ==");
console.log("=== : No type conversion, checks value AND type");
console.log("==  : Type coercion happens, checks value only");
console.log("");
console.log("NaN:");
console.log("- NaN == NaN is false (NaN is never equal to anything)");
console.log("- Use Number.isNaN() to check for NaN");
console.log("- typeof NaN is 'number' (weird but true)");
console.log("");
console.log("typeof:");
console.log("- Returns string: 'number', 'string', 'boolean', 'object', etc.");
console.log("- typeof null === 'object' (HISTORICAL BUG)");
console.log("- typeof [] === 'object' (arrays are objects)");
console.log("- Use Array.isArray() to check for arrays");
console.log("");
console.log("Remember: '5' === 5 is false, but '5' == 5 is true");
console.log("This is the source of many JavaScript bugs!");

// ==================== Quick Test ====================
console.log("\n=== QUICK TEST ===");
console.log("What will these print?");
console.log("1 == '1':", 1 == '1');
console.log("1 === '1':", 1 === '1');
console.log("true == 1:", true == 1);
console.log("true === 1:", true === 1);
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("typeof NaN:", typeof NaN);
console.log("typeof null:", typeof null);
console.log("typeof []:", typeof []);
console.log("Array.isArray([]):", Array.isArray([]));
