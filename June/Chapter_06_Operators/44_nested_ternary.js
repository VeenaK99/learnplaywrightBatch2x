// JavaScript Nested Ternary Operators
// Finding maximum of three numbers using nested ternaries

// ==================== SYNTAX ERROR IN YOUR CODE ====================
// Incorrect:
// let max = a > b ? (b > c ? b : c) a: b;  // Error: extra 'a' before colon

// Corrected versions:

// ==================== Find Maximum of 3 Numbers ====================

const a = 10, b = 25, c = 15;

// Method 1: Step by step
let max = a > b 
    ? (a > c ? a : c)  // if a > b, then compare a with c
    : (b > c ? b : c); // else compare b with c

console.log(`Numbers: a=${a}, b=${b}, c=${c}`);
console.log(`Maximum: ${max}`); // 25

// ==================== Alternative Syntax ====================

// More compact (but less readable)
const max2 = a > b ? a > c ? a : c : b > c ? b : c;
console.log(`Compact max: ${max2}`); // 25

// ==================== Breakdown ====================

/*
Logic tree:
         a > b?
        /      \
      yes       no
      /          \
   a > c?      b > c?
   /    \       /    \
 yes    no    yes    no
  |      |     |      |
  a      c     b      c
*/

// ==================== Find Minimum of 3 Numbers ====================

const min = a < b 
    ? (a < c ? a : c) 
    : (b < c ? b : c);

console.log(`Minimum: ${min}`); // 10

// ==================== Nested Ternary with 4 Numbers ====================

const d = 30;
const max4 = a > b 
    ? (a > c ? (a > d ? a : d) : (c > d ? c : d))
    : (b > c ? (b > d ? b : d) : (c > d ? c : d));

console.log(`\nWith d=${d}, max is: ${max4}`); // 30

// ==================== Real-World Example: Grade Calculator ====================

const score = 85;
const grade = score >= 90 ? 'A' :
              score >= 80 ? 'B' :
              score >= 70 ? 'C' :
              score >= 60 ? 'D' : 'F';

console.log(`\nScore: ${score}, Grade: ${grade}`); // B

// ==================== Best Practices ====================

// 1. Use parentheses for clarity
// 2. Don't nest more than 2-3 levels (use if-else for complex logic)
// 3. Format with proper indentation

// Good:
const result = condition1
    ? (condition2 ? value1 : value2)
    : (condition3 ? value3 : value4);

// Bad (hard to read):
const bad = condition1 ? condition2 ? value1 : value2 : condition3 ? value3 : value4;

// ==================== Summary ====================
// syntax: condition ? valueIfTrue : valueIfFalse
// nested: condition1 ? (condition2 ? a : b) : c
