console.log("\n\n==> data-types.js <==\n\n");

/* ***************************************************************************************** */
/*
Data Types in JavaScript:
- Primitive Types : 
    Number, 
    String, 
    Boolean, 
    Undefined, 
    Null, 
    BigInt, 
    Symbol
*/

// Number
let price = 34;
console.log("price = " + price);
console.log("typeof price: " + typeof price);

let totalPrice = 29.99;
console.log("totalPrice = " + totalPrice);
console.log("typeof totalPrice: " + typeof totalPrice);


// String
let firstName = "Talha Yaseen"
console.log("firstName = " + firstName);
console.log("typeof firstName: " + typeof firstName);


// Boolean
let isFollow = true;
console.log("isFollow = " + isFollow);
console.log("typeof isFollow: " + typeof isFollow);


// Undefined
let x;
console.log("x = " + x);
console.log("typeof x: " + typeof x);


// Null
let y = null;
console.log("y = " + y);
console.log("typeof y: " + typeof y);           // outputs 'object' meaning 'null' is an object


// Bigint
let balance = BigInt(4345);                     // BigInt() takes string, number, bigint or boolean as a value
console.log("balance = " + balance);
console.log("typeof balance: " + typeof balance);


// Symbol
let sym = Symbol("Hello!");                     // Symbol() takes string, number or undefined as a value
console.log(sym);                               // Symbol() cannot be converted to a string i.e. can't be concatenated
console.log("typeof sym: " + typeof sym);