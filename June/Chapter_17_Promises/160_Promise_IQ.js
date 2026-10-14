// //IQ
// let p = new Promise(function (reslove, reject) {
//     reslove(42);
// });

// p.then(function (value) {
//     console.log("Answer:", value);

// });

// //IQ

// let prom2 = new Promise(function (reslove, reject) {
//     reject("Something broke")
// });

// prom2.catch(function (err) {
//     console.log("caught:", err);

// });

// //IQ

// let prom3 = Promise.resolve(5);

// prom3.then(function (val) {
//     console.log("Result:", val);
// });

// Promise.resolve(1).then(function (val) {
//     console.log(val);
//     return val + 1;
// }).
//     then(function (val) {
//         console.log(val);
//         return val + 1;
//     }).
//     then(function (val) {
//         console.log(val);
//         return val + 1;
//     })

// //-----------------------------------------

// //IQ4

// Promise.resolve("start").then(function (val) {
//     console.log(val);
//     throw new Error("Broke at step 2");
// }).
//     then(function () {
//         console.log("this will not RUN");
//     }).catch(function (err) {
//         console.log("caught:", err.message)
//     })



// ⠶ err is the Error object the promise hands to .catch when it
//   fails. Every Error carries a .message property — the text you
//   passed into new Error(...).

//   new Error("Broke at step 2")
//     //          └──────────────┘  this string becomes err.message       


//   So when catch runs, err.message is "Broke at step 2" (the
//   reason). The full err object also has other stuff like
//   err.stack (where it broke) and err.name ("Error"), but .message       
//    is just the human-readable part.


//--------------------------------------------------------

// //IQ
// Prom6 = Promise.reject("Test Failed");


// Prom6.then(function (resolve) {
//     console.log("problem resolved_test PASS")
// }).catch(function (err) {
//     console.log("error:", err.message)
// }).finally(function () {
//     console.log("cleanUP done");
// });


// Promise.reject("test failed").then(function (data){
//     console.log("data:",data);
// }).catch(function(err){
//     console.log("error:",err);
// }).finally(function(){
//     console.log("finally block executed");
// })

// //IQ

// let t1 =  Promise.resolve("Login:PASS");
// let t2 = Promise.resolve("Search:pass");
// let t3 = Promise.resolve("logout:pass");

// Promise.all([t1,t2,t3]).then(function(results){
//     console.log(results);
// })


//IQ_last

// let t1=Promise.resolve("PASS");
// let t2=Promise.reject("FAIL");
// let t3=Promise.resolve("PASS");

// Promise.all([t1,t2,t3]).then(function(r){
//     console.log("All:",r);
// }).catch(function (err){
//     console.log("stopped:",err);
// });


Promise.allSettled([
        Promise.resolve("API 200"),
        Promise.resolve("API 201"),
        Promise.reject("API 400"),
        Promise.resolve("API 500")
]).then(function(results){
    results.forEach(function(r){
        let val = r .status==="fulfilled"?r.value  :r.status;
        console.log(r.status+"->"+val) 
        //  
        console.log(r);
    });

});