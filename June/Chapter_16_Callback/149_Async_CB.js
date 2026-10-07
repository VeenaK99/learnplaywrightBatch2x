//callback functions

//a callback is a function passed to another function,
//which is then called (back) later inside that function

//asynchronous async

console.log("TEST 1 :STARTED");
console.log("Test r:executed");

setTimeout(function () {
    console.log("test 2: API response received");
}, 2000);

console.log("Test N:executed");
