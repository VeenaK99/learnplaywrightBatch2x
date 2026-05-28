const base_place = "Karnataka";
//base_place="Tumkur"

//base_place="Newzealand";
// TypeError: Assignment to constant variable.

//const base_place = "Delhi";

//redeclaration is not possible
//
//SyntaxError: Identifier 'base_place' has already been declared


let name = "Vinay"
name = "rasha";

//var is function scoped
//let is block scop
//const is block scoped and cannot be redeclared and reassigned
function sayName() {

    console.log(name);
    console.log(base_place);

}

sayName();