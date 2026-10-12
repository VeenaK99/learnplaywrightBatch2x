function greetTester(name, callback) {
    console.log("welcome", +name);
    callback();
}

greetTester("dev", function () {
    console.log("Let'start testing")
});

// call back with parameters

function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("LoginTest", function (name, result) {
    console.log(name + "->" + result);
});

//sync callback - for each
let bugsArray = ["UI glitch", "API timeout", "Wrong redirect"];

bugsArray.forEach(function (bug, i) {
    console.log("Bug #", +(i + 1) + ":" + bug);
});

console.log("total number of bugs= " + bugsArray.length);
