// My first JavaScript code
console.log("Hello World!");

// varaibles
let firstName = "Talha";
let lastName = "Yaseen";

let fullName = firstName + " " + lastName;
console.log(fullName);

// constants
const intersetRate = 0.3;
// intersetRate = 1;    cannot be reassigned bcz it's a constant
console.log(intersetRate);


// primitives/value types
let name = "Zubair";    // string literal
let age = 21;           // number literal
let isApproved = false; // boolean literal
let chawalValue = undefined;
let selectedColor = null;   // null is used to set clear for some value

// var, let and const
// var --> scope is within function it is declared
// let --> scope is within block it is declared
// const --> scope is within block but value cannot be changed once intialized
function sayHello() {
    // if i is declared with var then console.log(i) after for loop can access the variable i
    // if i is declared with let then console.log(i) after for loop cannot access the variable i
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}

sayHello();