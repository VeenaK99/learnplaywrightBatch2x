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



async function  runE2E(){

    let msg1 = await openBrowser();
    let msg2 = await goTologin();
    let msg3 = await clicklogin();
     console.log(msg1,msg2,msg3);
}

runE2E();