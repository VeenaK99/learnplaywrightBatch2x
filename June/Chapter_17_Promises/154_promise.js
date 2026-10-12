
// ⠶ In Playwright (and JavaScript generally), a Promise is an object
//   representing a value that isn't available yet but will be at some        
//   point in the future — either successfully (fulfilled) or with an
//   error (rejected).


let order = new Promise(function(resolve,reject){
let foodReady=true;
if(foodReady){
    resolve("Pizza is delivered,Food is ready");
}
else{
    reject("ORder cancelled bcos of raaaaaain");
}


});

let order1=false;
console.log(order);
console.log(order1);

