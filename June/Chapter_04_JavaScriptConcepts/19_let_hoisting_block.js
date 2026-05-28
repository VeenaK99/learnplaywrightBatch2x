//let is Block Scoped

let x="global";
if(true){

    //TDZ-->you can use an variable until it is assigned
    let x="local"
    console.log(x);

}