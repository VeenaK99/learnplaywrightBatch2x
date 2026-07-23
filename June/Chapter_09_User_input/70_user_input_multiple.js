// 70_user_input_multiple.js
// Asking multiple questions sequentially

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  rl.question('Enter your age: ', (age) => {
    rl.question('Enter your city: ', (city) => {
      console.log(`\n--- User Info ---`);
      console.log(`Name: ${name}`);
      console.log(`Age: ${age}`);
      console.log(`City: ${city}`);
      rl.close();
    });
  });
});
