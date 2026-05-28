//let block scoped
let a = 10;

let retrycount = 0;
retrycount = retrycount + 1;
console.log("Retry attempt :", retrycount);


let cm = "10";

function say() {
    let pm = "modi";
    console.log(pm);

}

say();
//console.log(pm); let is limited to function 