let a = [2, 6];
let b = [33, 98];

let c = a.concat(b);

console.log(c);

//modern way of concatenation
let md = [...a, ...b];
console.log(md);

//join
let mix=a.join("ht");

console.log(mix);