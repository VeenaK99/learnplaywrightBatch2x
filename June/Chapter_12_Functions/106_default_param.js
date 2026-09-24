function retry(testName,maxtries = 3,delay = 1000){
    console.log(`Retrying ${testName}, up to ${maxtries} times ${delay} apart`)
}

retry("login");

retry("login",23,43);