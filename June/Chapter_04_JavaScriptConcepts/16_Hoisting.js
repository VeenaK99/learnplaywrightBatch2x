console.log(greet);
var greet = "hello";
console.log(greet);

//JS Engine Line by Line ,JIT compilation

//behind scenes
//var greet;              <--hoisted Undefined
//console.log(greet);     <--undefined
//greet="hi all";          <--assignement stays in place 
//console.log(greet);      <--"Hi all"