//Arrow functions(es6)
//we dont define functions 

const city= (cityname)=> "hi welcome to "+ cityname;

let result= city("Gubbi");

console.log(result);



const mult = n => n*2;

let doubling_result= mult(99);
console.log(doubling_result);


///normal function
function validstatuscode ( status){
    if(status >=200 && status <= 300){

        console.log ("request is fine");
    }
}

//this function is an expression

const validstatuscode_exp = function (status){

     if(status >=200 && status <= 300){

        console.log ("request is fine");
    }
}


//arrow function

const validstatuscode_arrow = (status)=>{
     if(status >=200 && status <= 300){

        console.log ("request is fine");
    }
}

function add ( a,b){
    return a+b;
}

let a=9,b=5;
const add2 = (a,b) =>console.log(a + b);

add2(2,3);


function say(){
    console.log("hi");
}
 const say1 = () => console.log('hi');
 const say2= () =>"Sunny";
 say1();


 

