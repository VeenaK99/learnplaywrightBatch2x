let a = 10;//global scope
console.log(a);

//definition of function
function printhello() {
    console.log("playright session");
    let a = 22;
    console.log(a);
    if (true) {
        let a = 98;
        console.log(a);

    }
    console.log("F->", a);
}


printhello();

console.log("G->", a)