let scores = [30, 50, 89, 77, 90];


//map-transform every element,return a new arrays

let grades = scores.map(s => s > 60 ? "Pass" : "fail");
console.log(grades);

//filer keeps elements that pass a test

let pass_scores = scores.filter(s => s > 70);
console.log(pass_scores);

//reduce - accumaltes a single value
let sum_res = scores.reduce((a, b) => a + b, 0);

console.log(sum_res);

//flat - flatens the nested arrays
let  nested = [[1,3],[3,7],7 ,19,17,[32,76,45]        ];

let flat_arr = nested.flat();

console.log(flat_arr);