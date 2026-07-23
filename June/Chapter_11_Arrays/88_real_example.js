let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser);

console.log(browser.length);

let removed_element = browser.shift();

console.log(removed_element);

console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "edge") {
        console.log("edge removed from array");
    }
}

