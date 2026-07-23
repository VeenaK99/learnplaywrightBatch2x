// 69_user_input_number.js
// Parsing numbers from user input

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age: ', (input) => {
  const age = parseInt(input);
  console.log(`You are ${age} years old.`);
  rl.close();
});
