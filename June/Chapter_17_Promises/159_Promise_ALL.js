let checkAuth = Promise.resolve("auth OK");
let checkDB= Promise.resolve("DB ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth,checkDB,checkCache]).then(function(results){
    console.log("all checks are fine");
})

Promise.all([

    Promise.resolve("ok"),
    Promise.reject("DB down"),  
    Promise.resolve("OK")
]).then(function(r){
    console.log(r);

}).catch(function(error){

    console.log("failed:",error);

})

//used to print consolidated results of Promise
//Promise.allSettled()