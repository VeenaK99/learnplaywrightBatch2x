// 2D array (array of arrays)

let matrix = [
    [10, 20, 30],
    [1, 2, 3],
    [50, 10, 60]
];

// access a single value: matrix[row][column]
console.log(matrix[0][0]);
console.log(matrix[1][2]);
console.log(matrix[2][1]);

// access a whole row
console.log(matrix[1]);

// number of rows
console.log(matrix.length);

// number of columns in the first row
console.log(matrix[0].length);

// loop through each row
for (let row of matrix) {
    console.log(row);
}

// nested loop: go through every row and every column
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`row ${i} col ${j} = ${matrix[i][j]}`);
    }
}


let rowSums = matrix.map(row => row.reduce((a,b) => a+b,0));

console.log(rowSums);
let scores=[
    
    45,62,73,88
];

let total = scores.reduce((a,b)=> a+b,0);
console.log(total);

  let nums = [45, 62, 73, 88];
    let sum = nums.reduce((a, b) => a + b, 0);
    console.log(sum); // 268

    let suiteResults= [
        ["login-pass","register-pass","logout-pass"],//auth Suite
    ["search-pass","filter-fail","sort-pass"],//search suite
    ["checkout-fail","payment-fail","confirm-pass"]//payment suite
    ]

    //to print all test cases which are failed

    
for( let i =0 ;i <suiteResults.length;i++){
    for( let j=0; j< suiteResults[i].length;j++ ){
        if(suiteResults[i][j].includes("fail")){
            console.log(suiteResults[i][j])
        }
    }
}
//output
// filter-fail
// checkout-fail
// payment-fail