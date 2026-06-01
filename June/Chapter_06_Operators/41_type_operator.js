let bhima = 10;

let bhima_vote = bhima > 18 ? "Vote" : "no Vote";
console.log(bhima_vote);


let actualStatusCode = 200, expectedStatusCode = 404;
let result = actualStatusCode === expectedStatusCode ? "pass" : "fail";
console.log(result);

let env = "statging";
let baseUrl = env === "prod" ? "A- prod URL" : "B -staging URL";

console.log(baseUrl);


let isCI = true;
let browserMode = isCI ? "headless" : "headed";

console.log(browserMode);

let responseTime = 999;
let sla = 1000;

let sla_status = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(sla_status);
console.log(`Response : ${responseTime}ms - ${sla_status}`);

let condition = true;
let willRain = condition ? true : false;
console.log(willRain);

//multiple condition

let age_person = 2;
let age_trip = age_person > 3 ? (age_person > 16 ? "drink" : "NoDrink") : "No trip";
console.log(age_trip);

//interview question

//maximum number between two numbers using ternary operator

let a = 10;
let b = 20;
let max = a > b ? a : b;
console.log("max of two numbers:" + max);

//maximum of three numbers 

let x = 99, y = 76, z = 55;
let max2 = x > y ? (y > z ? y : z) : y;

console.log(max2);
