let test_results =
["Pass","Fail","Pass","skip"];

test_results.forEach(function(result,index){
    console.log("**");
console.log("Test"+index+"=>"+result);
})

// for synchronous call back ,this can be considered as 
//perfect example as each item is picked one by one from first to last