//pure functions vs impure functions

//pure function
//1. same input always gives same output
//2. does not change anything outside the function

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));
console.log(add(2, 3));

//impure function
//depends on or changes something outside the function

let counter = 0;

function increment() {
    counter++;
    return counter;
}

console.log(increment());
console.log(increment());
console.log(increment());

//impure - uses external variable (output depends on outside value)

let tax = 10;

function total(price) {
    return price + tax;
}

console.log(total(100));

tax = 20;

console.log(total(100));

//pure version of the same thing - tax comes in as an argument

function pureTotal(price, taxRate) {
    return price + taxRate;
}

console.log(pureTotal(100, 10));
console.log(pureTotal(100, 10));

//impure - changes the array that was passed in

function addItem(list, item) {
    list.push(item);
    return list;
}

const cart = ["apple"];

addItem(cart, "banana");
console.log(cart);

//pure version - returns a new array, original is not touched

function pureAddItem(list, item) {
    return [...list, item];
}

const basket = ["apple"];

const newBasket = pureAddItem(basket, "banana");
console.log(basket);
console.log(newBasket);
