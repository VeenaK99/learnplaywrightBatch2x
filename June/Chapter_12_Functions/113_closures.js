//closures

//a closure is a function that remembers the variables from where it was created

function outer() {
    let message = "hello from outer";
    console.log("1-outer");
    function inner() {
        console.log(message);
        console.log("2-inner");
    }
    return inner;
}

const myFunc = outer();
myFunc();

//counter - inner function keeps the count alive
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const next = counter();
next();
next();
next();

//every call to counter() gets its own copy of count
const counterA = counter();
const counterB = counter();
counterA();
counterB();

//real example - test run tracker
function testRunner() {
    let passed = 0;
    let failed = 0;
    return {
        pass() {
            passed++;
        },
        fail() {
            failed++;
        },
        report() {
            console.log(`passed ${passed}, failed ${failed}`);
        },
    };
}

const run = testRunner();
run.pass();
run.pass();
run.fail();
run.report();

//iq - login attempts
function loginTracker(maxTries) {
    let tries = 0;
    return function (user) {
        tries++;
        if (tries > maxTries) {
            console.log(`${user} is blocked`);
        } else {
            console.log(`${user} try ${tries} of ${maxTries}`);
        }
    };
}

const login = loginTracker(3);
login("alice");
login("alice");
login("alice");
login("alice");

