// JavaScript Template Literals
// Introduced in ES6, template literals provide an easy way to create multiline strings and perform string interpolation

// ==================== Basic Syntax ====================
// Template literals use backticks (`) instead of quotes
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!

// ==================== String Interpolation ====================
// Embed expressions inside ${}
const a = 5;
const b = 10;
console.log(`The sum is: ${a + b}`); // The sum is: 15

// Can include any valid JavaScript expression
const price = 100;
const tax = 0.18;
console.log(`Total: $${(price * (1 + tax)).toFixed(2)}`); // Total: $118.00

// ==================== Multiline Strings ====================
// No need for \n or string concatenation
const multiline = `
This is a
multiline string
using template literals
`;
console.log(multiline);

// ==================== Expression Evaluation ====================
const user = { name: "Alice", age: 25 };
console.log(`${user.name} is ${user.age} years old`);

// Ternary operators work too
const isMember = true;
console.log(`Price: $${isMember ? 20 : 50}`); // Price: $20

// ==================== Tagged Template Literals ====================
// Advanced feature for processing template literals with a function
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? `**${values[i]}**` : '';
        return result + str + value;
    }, '');
}

const item = "coffee";
const cost = 5;
console.log(highlight`I bought ${item} for $${cost}`);
// I bought **coffee** for $**5**

// ==================== Raw Strings ====================
// Access raw characters without escape sequence processing
const rawPath = String.raw`C:\Users\Name\Documents`;
console.log(rawPath); // C:\Users\Name\Documents

// ==================== Nested Template Literals ====================
const person = { name: "Bob", items: ["book", "pen", "laptop"] };
const list = `
${person.name}'s items:
${person.items.map(item => `  - ${item}`).join('\n')}
`;
console.log(list);

// ==================== Practical Examples ====================

// HTML Template
const data = { title: "My Page", content: "Welcome!" };
const html = `
<article>
    <h1>${data.title}</h1>
    <p>${data.content}</p>
</article>
`;

// URL Construction
const baseUrl = "https://api.example.com";
const endpoint = "users";
const id = 123;
const url = `${baseUrl}/${endpoint}/${id}`;
console.log(url); // https://api.example.com/users/123

// SQL-like Query Builder
const table = "products";
const limit = 10;
const query = `SELECT * FROM ${table} LIMIT ${limit}`;

// ==================== Exercises ====================

// Q1: Create a template literal that displays current date in format: "Today is MM/DD/YYYY"
// const today = new Date();
// const dateString = `Today is ${...}`;

// Q2: Create a function using template literals that formats an address object
// function formatAddress(street, city, state, zip) { ... }

// Q3: Use tagged template literals to create a simple i18n (internationalization) function
// that wraps text in different languages

// ==================== Key Takeaways ====================
// 1. Use backticks (`) for template literals
// 2. ${expression} for embedding values
// 3. Natural multiline support
// 4. Tagged templates for custom processing
// 5. String.raw for raw string content




let firstname = "Shaurya";
let fullname = `Hi ${firstname} KA`;
console.log(fullname);

let envt = "staging";
 envt = "prod";
const userID = 3456;
const apiURL = `https://api-${envt}.tekion.com/users/${userID}`;
console.log(apiURL);

//playright
const rowIndex=3;
const colName="email";
await page.locator(`[data-row="${rowIndex}"][data-col="${colName}"]`).click();
