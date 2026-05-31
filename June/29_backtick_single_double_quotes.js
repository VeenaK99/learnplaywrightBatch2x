// JavaScript: Single Quotes vs Double Quotes vs Backticks

// ==================== SINGLE QUOTES ('') ====================
// - Standard string delimiter
// - Must escape single quotes inside
const single = 'Hello World';
const withApostrophe = 'It\'s a sunny day'; // escape needed

// ==================== DOUBLE QUOTES ("") ====================
// - Same as single quotes, just different character
// - Must escape double quotes inside
const double = "Hello World";
const withQuote = "He said \"Hello\""; // escape needed

// ==================== BACKTICKS (``) - Template Literals ====================
// - Allow string interpolation with ${}
// - Support multiline strings
// - No need to escape quotes
const name = "John";
const backtick = `Hello, ${name}!`; // interpolation
const multiline = `
Line 1
Line 2
Line 3
`;

// ==================== COMPARISON EXAMPLE ====================
const value = 42;

// Single/Double: Need concatenation for variables
console.log('Value is: ' + value);    // Value is: 42
console.log("Value is: " + value);    // Value is: 42

// Backtick: Direct interpolation
console.log(`Value is: ${value}`);    // Value is: 42

// Summary:
// '' or "" = Regular strings, use whichever you prefer
// ``       = Template literals: interpolation + multiline support
