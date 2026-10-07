// JavaScript: Different Ways to Create Strings

// ==================== 1. Single Quotes ('') ====================
const single = 'Hello World';
console.log(single);

// Escape a single quote inside with backslash
const withApostrophe = 'It\'s a sunny day';
console.log(withApostrophe);

// ==================== 2. Double Quotes ("") ====================
const double = "Hello World";
console.log(double);

// Escape a double quote inside with backslash
const withQuote = "She said \"Good Morning\"";
console.log(withQuote);

// ==================== 3. Backticks (``) - Template Literals ====================
// Easy interpolation with ${} and multiline support
const name = "Shaurya";
const backtick = `Hello, ${name}!`;
console.log(backtick);

const multiline = `Line 1
Line 2
Line 3`;
console.log(multiline);

// ==================== 4. String() Function (type conversion) ====================
// Converts other types into a string (primitive)
const fromNumber = String(123);
const fromBoolean = String(true);
console.log(fromNumber, typeof fromNumber);
console.log(fromBoolean, typeof fromBoolean);

// ==================== 5. new String() Constructor (object) ====================
// Creates a String OBJECT, not a primitive - avoid this in daily code
const strObject = new String("Hello");
console.log(strObject, typeof strObject);

// ==================== 6. Concatenation with + ====================
const firstName = "Veena";
const lastName = "Kumaraswamy";
const fullName = firstName + " " + lastName;
console.log(fullName);

// ==================== 7. Empty String ====================
// Useful as a starting point when you build a string later
let empty = "";
console.log(empty, empty.length);

// ==================== 8. String.fromCharCode() ====================
// Build a string from character codes
const fromCharCode = String.fromCharCode(72, 101, 108, 108, 111);
console.log(fromCharCode); // Hello

// ==================== 9. String.fromCodePoint() ====================
// Like fromCharCode but supports emojis and unicode above 65535
const fromCodePoint = String.fromCodePoint(128512);
console.log(fromCodePoint); // 😀

// ==================== 10. String.raw ====================
// Keeps backslashes as-is, no escape sequence processing
const rawPath = String.raw`C:\Users\Name\Documents`;
console.log(rawPath);

// ==================== 11. .toString() Method ====================
const num = 45;
const asString = num.toString();
console.log(asString, typeof asString);

// ==================== 12. .repeat() and .join() to build strings ====================
// Repeat the same text
const line = "-".repeat(20);
console.log(line);

// Join an array into a single string
const words = ["I", "love", "JavaScript"];
console.log(words.join(" "));

// ==================== Key Takeaways ====================
// 1. Use '' or "" for simple strings - pick one and stay consistent
// 2. Use backticks when you need ${} interpolation or multiline text
// 3. String(value) converts any value to a primitive string
// 4. new String() creates an object - prefer primitives instead
// 5. String.raw keeps backslashes literal - handy for Windows paths
