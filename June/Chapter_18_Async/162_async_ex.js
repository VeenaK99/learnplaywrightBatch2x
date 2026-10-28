
function getToken() {
    return Promise.resolve("123async");
}

//playright
//page goto() - promise()
//await page.goto();

async function run() {
    let token = await getToken();
    console.log(token);
}



run();