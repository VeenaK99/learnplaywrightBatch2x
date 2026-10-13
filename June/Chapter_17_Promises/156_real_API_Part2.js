let apiCall = new Promise(function (resolve, reject) {
    reject("500 error");

});

apiCall.then(function (data) {
    console.log("Sucess or reslove");
}).catch(function (error) {
    console.log(error);
})

