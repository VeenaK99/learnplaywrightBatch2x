let hasId = true;
let isAdult = true;

if(hasId){
    if(isAdult){
        console.log("adult person")

    }else{
        console.log("minor person");
    }
}
else 
    console.log("ID required");



if("abc") console.log("String is truthy");
if(38) console.log("still you are young");

if({}) console.log("empty object is truthy");
if([]) console.log("empty array is truthy");


if("") console.log("wont print");
if(null)  console.log("wont print");
if(undefined)  console.log("wont print");
 if (NaN) console.log("wont print");
 if(0)  console.log("wont print");


 let name= undefined;
 if(name){
    console.log("you are welcome")
 }else {
    console.log("Not existing");
 }