function add(a,b,c){
    return a+b+c;
}

let num= [1,2,3];
let a=add(...num);

console.log(a);

let num2=[2,4,6];
let result=add(...num2);
console.log(result);


responseCodes= [200,300,404,400];
function hasError(...codes){
    return codes.some(c => c>= 400);
}
let hasError_result=hasError(...responseCodes);

console.log(hasError_result);

