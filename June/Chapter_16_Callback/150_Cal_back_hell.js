// Pyramid of doom(a.k.a.callback hell) is what
//   happens when each asynchronous step must run inside    
//    the callback of the previous step.Because every      
//   step nests one level deeper, the code marches off      
//   to the right in a triangle shape.

//   The simple program

//   Say the food order has to happen in order: cook →
// pack → deliver → eat.Each step takes time, so
//   each uses a callback that fires when it finishes.

// function cook(order, done) {
//     setTimeout(() => {
//         console.log(`cooked
//   ${order}`); done(order);
//     }, 500);
// }
// function pack(food, done) {
//     setTimeout(() => {
//         console.log(`packed
//   ${food}`); done(`box(${food})`);
//     }, 500);
// }
// function deliver(box, done) {
//     setTimeout(() => {
//         console.log(`delivered        
//   ${box}`); done("delivered");
//     }, 500);
// }
// function eat(result, done) {
//     setTimeout(() => {
//         console.log(`ate it,
//   ${result}`); done();
//     }, 500);
// }

//   Now run them in order — and watch the shape:

// cook("pizza", function (food) {
//     pack(food, function (box) {
//         deliver(box, function (result) {
//             eat(result, function () {
//                 console.log("done");
//             });
//         });
//     });
// });

//   The nesting is the whole problem — each function's     
//    body is another function's body:

// cook(pizza, function (food) {
//     pack(food, function (box) {
//         deliver(box, function (result) {
//             eat(result, function () {
//                 console.log("done");
//             });
//         });
//     });
// });

//   That stair - step is the pyramid of doom.It isn't a     
//    syntax error — it runs fine — but it's shaped
//   like a pyramid pointing right.

//   Why it happens

//   Because each step is asynchronous, the next step       
//   can only start once the current one calls its
// callback.The only place "after this finishes"
//   exists is inside the callback.So step 2 goes
//   inside step 1, step 3 inside step 2, and so on.        

//   Why it's bad

//     - Hard to read — the real logic(cook, pack,
//         deliver, eat) is buried under function () {
//             noise.     
//   - Hard to handle errors — you'd need a try/catch       
//   or error check inside every level.
//   - Fragile to change — inserting one step means
//             re - indenting everything below it.


//   The fix — flatten it with async / await

//   Promises + async / await let you write the same
//   sequence top - to - bottom, no nesting:

async function order() {
    const food = await cook("pizza");
    const box = await pack(food);
    const result = await deliver(box);
    await eat(result);
    console.log("done");
}
order();

//   Same order, same timing, no pyramid — each await
//   waits for the step above it.That's exactly why
//   modern JavaScript moved away from deeply nested
//             callbacks.

//                 One - line summary: the pyramid of doom is nested
//   callbacks stacking rightward because each async
//   step has to live inside the previous one's
//             callback — and async / await is the flat way to
//   write the same thing.