let tests = ["login", "logout", "search", "sleept"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("--------------------------------");

//for of ..cleanest of values

for (giant of tests) {
    console.log(giant)
}
console.log("--------------------------------");
tests.forEach((tests, index) => {
    console.log(tests, index);
});
console.log("--------------------------------");

