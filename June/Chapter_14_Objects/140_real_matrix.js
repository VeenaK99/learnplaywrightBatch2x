let testMatrix = [
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180],
];
//how many test cases executed
//how many test cases passed
//what is the status code for the failed testcases


for (let index=0 ; index <testMatrix.length ;index++){
    const element = testMatrix[index];
    console.log(element);
}


for( let i =0 ;i <testMatrix.length;i++){
    for( let j=0; j< testMatrix[i].length;j++ ){
        console.log(testMatrix[i][j]);
    }
    console.log();
}


//process
for(let row of testMatrix) {
    for(let cell of row){
        process.stdout.write(cell+" ");
    }
    console.log();
}

//for each 

console.log("*************************************");
console.log("for each loop");
testMatrix.forEach(row => {
    row.forEach(
        cell=>process.stdout.write(cell+" "));
        

console.log();
    });