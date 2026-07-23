let arrayNames = ['sai', 'gharima', 'clara', 'jamie', 'kaste'];

console.log(arrayNames.indexOf('jamie'));// indexOf

console.log(arrayNames.includes('gharima'));//true

//find - returns first matching element

let nums = [20, 99, 8, 7];
let res = nums.find(x => x < 19);

console.log(res);

let x = nums.findIndex(x => x);
console.log(x);
