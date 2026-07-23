const prompt = require("prompt-sync")();

let num = Number(prompt("enter the number :"));

if (num % 2 === 0) {
    console.log(num + "num is EVEN");
}
else {

    console.log(num + "nums is odd");
}

//u can use this later in TYPESCRIPT