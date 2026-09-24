//higher order function

//a higher order function either takes a function as an argument
//or returns a function (or both)

//1. takes another function as an argument

function greet(name) {
    console.log(`hello ${name}`);
}

function processUser(name, callback) {
    callback(name);
}

processUser("alice", greet);

//2. passing an arrow function

processUser("bob", (name) => {
    console.log(`welcome ${name}`);
});

//3. calculating with a callback

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, sub));

//4. a higher order function that returns a function

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(10));

//5. real example - running each test case

function runTest(name, check) {
    const result = check();
    console.log(`${name}: ${result ? "PASS" : "FAIL"}`);
}

runTest("login works", () => 200 === 200);
runTest("logout works", () => 200 === 500);

