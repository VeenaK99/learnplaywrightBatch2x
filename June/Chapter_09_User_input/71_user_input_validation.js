// 71_user_input_validation.js
// Validating user input before using it

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number between 1 and 10: ', (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num < 1 || num > 10) {
    console.log('Invalid input. Please enter a number between 1 and 10.');
  } else {
    console.log(`You entered ${num}. Valid input!`);
  }

  rl.close();
});
