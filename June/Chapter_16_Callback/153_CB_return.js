function calculate(a,b,operation){
    console.log("Before call back");
    return operation(a,b);
}

let sum = calculate(10,20,function(x,y){
    console.log("results are returned by functions");
    return x + y;
    
});

console.log(sum);