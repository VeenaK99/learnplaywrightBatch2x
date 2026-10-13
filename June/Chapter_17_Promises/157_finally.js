let testRun = new Promise(function( reslove,reject){
    let apiCall=true;
    if(apiCall){
        reslove("status:done")
    }
    else{
    reject("Assert Failed");
    }
})
testRun.then(function (data){
    console.log(data);
}).catch(function (error){
    console.log(error);
}).finally(function(){
    console.log("i will be executed anyhow");
});