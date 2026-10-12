let apiCall =  new Promise (function (resolve,  reject){

    resolve({
        status:200,body:"User Data"
    })

});

apiCall.then(function(response){
    console.log(response.status);
})

//then() runs only when the promises resolves succesfully


