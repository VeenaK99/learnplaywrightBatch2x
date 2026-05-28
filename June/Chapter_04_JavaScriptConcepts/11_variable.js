var a =10;

console.log("global scope a:"+a);

function test(){
    console.log("function scope")
    a=66;// local scope of a
    console.log(a);
}

test()