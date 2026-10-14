function openBrowser(){
    return new Promise(function (reslove){
        //code to open browser
        reslove("open Browser");
    })
}

function goTologin(){
    return new Promise(function(reslove){
        reslove("Login Page loaded");
    });


}

function clicklogin(){
    return new Promise(function(resolve){
        resolve("Login Sucessfully")
    });
}
openBrowser().then(function (mdg){
    
return goTologin();
});