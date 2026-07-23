// 72_user_input_menu.js
// Simple menu-driven program using user input

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Calculator Menu ===');
console.log('1. Add');
console.log('2. Subtract');
console.log('3. Multiply');
console.log('4. Divide');

rl.question('Choose an option (1-4): ', (choice) => {
  rl.question('Enter first number: ', (a) => {
    rl.question('Enter second number: ', (b) => {
      const num1 = parseFloat(a);
      const num2 = parseFloat(b);
      let result;

      switch (choice) {
        case '1': result = num1 + num2; break;
        case '2': result = num1 - num2; break;
        case '3': result = num1 * num2; break;
        case '4':
          result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
          break;
        default:
          result = 'Invalid option';
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
