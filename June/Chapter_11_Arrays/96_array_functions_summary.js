// 96 - Array functions summary
// reference file - grouped by what each function does

//--------------------------------------------------------
// 1. ADD / REMOVE  (mutating - change the original array)
//--------------------------------------------------------
let stack = [1, 2, 3];

stack.push(4);        // add to the end     -> [1, 2, 3, 4]
stack.pop();          // remove the end     -> [1, 2, 3]
stack.unshift(0);     // add to the front   -> [0, 1, 2, 3]
stack.shift();        // remove the front   -> [1, 2, 3]
stack.splice(1, 1);   // remove 1 item at index 1 -> [1, 3]

console.log("after add/remove:", stack);

//--------------------------------------------------------
// 2. READ / COPY  (non-mutating - return a new array)
//--------------------------------------------------------
let fruits = ['apple', 'banana', 'mango', 'kiwi'];

console.log(fruits[0]);                    // 'apple' - access by index
console.log(fruits.slice(1, 3));           // ['banana', 'mango'] - copy a chunk

let more = fruits.concat(['orange']);      // merge -> new array, fruits untouched
let spread = [...fruits, 'orange'];        // modern way, same result
console.log(more);
console.log(spread);

//--------------------------------------------------------
// 3. SEARCH
//--------------------------------------------------------
let names = ['sai', 'gharima', 'clara', 'jamie'];

console.log(names.indexOf('clara'));       // 2 (or -1 if missing)
console.log(names.includes('jamie'));      // true

let nums = [20, 99, 8, 7];
console.log(nums.find(x => x < 19));       // 8   - first element that passes
console.log(nums.findIndex(x => x < 19));  // 2   - its index

//--------------------------------------------------------
// 4. LOOP OVER ITEMS
//--------------------------------------------------------
let tests = ['login', 'logout', 'search'];

for (let t of tests) {
    console.log("for...of:", t);
}

tests.forEach((item, index) => {
    console.log("forEach:", index, item);
});

//--------------------------------------------------------
// 5. TRANSFORM  (non-mutating - return a new array)
//--------------------------------------------------------
let scores = [30, 50, 89, 77, 90];

let grades = scores.map(s => s > 60 ? "Pass" : "fail");  // one result per item
console.log(grades);                                     // ['fail','fail','Pass','Pass','Pass']

let pass_scores = scores.filter(s => s > 70);            // keep only passing
console.log(pass_scores);                                // [89, 77, 90]

let total = scores.reduce((a, b) => a + b, 0);           // boil down to one value
console.log(total);                                      // 336

let nested = [[1, 3], [3, 7], 7, 19, [32, 76]];
console.log(nested.flat());                              // [1,3,3,7,7,19,32,76]

//--------------------------------------------------------
// 6. ORDER & CHECKS
//--------------------------------------------------------
let numbers = [4, 22, 56, 77];

numbers.sort((a, b) => a - b);   // ascending  (string sort is the default!)
console.log(numbers);

numbers.sort((a, b) => b - a);   // descending
console.log(numbers);

console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray("veena"));    // false

console.log([78, 89, 88].every(s => s >= 70));  // true  - ALL must pass
console.log([60, 89, 88].some(s => s >= 70));   // true  - at least ONE passes

//--------------------------------------------------------
// RULE OF THUMB
// mutating (changes original):  push pop shift unshift splice sort reverse
// non-mutating (returns new):   slice concat map filter reduce flat
//--------------------------------------------------------
