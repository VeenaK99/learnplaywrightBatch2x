//checking arrays

//Check something is an Array

let result= Array.isArray([1,2,3,4,6]);
console.log(result);

result= Array.isArray("veena");
console.log(result);

console.log("-------------------------------");
//every and some
let mn=[78,89,88].every(s => s >= 70);
console.log(mn);

console.log("-------------------------------");
//playwright - API
[200,201,203].every(statuscode => statuscode>199);