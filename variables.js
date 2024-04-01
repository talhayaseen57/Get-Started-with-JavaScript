console.log("\n\n==> variable.js <==\n\n");

/* ***************************************************************************************** */
/*
Rules for varaible names in JavaScript:
- vaiarbles are case sensitive.
- vaiarbles can contain only alphabets, digits, underscore (_) and $ character.
- only alphabets, underscore (_) and $ character can be first character.
- reserved keywords can not be a varaible name.
- (optional) for best practice use camel-case naming convention.
*/

// fullName = "Talha Yaseen Zafar";         // String
// age = 23;                               // Number
// price = 99.99;                          // Number
// x = null;                               // means there is no value, but we know it was containing some value
// y = undefined;                          // means there is no value, never initialized before
// isFollow = true;                        // Boolean

// console.log(isFollow);




/* ***************************************************************************************** */
/*
var : Variable can be re-declared & updated. A global scope variable. It was used before 2015.

After ES6 update, there were new 
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.
*/

// using 'var' to declare variables is a worst practice. because you can re-declare the variables.
var studentId = 34;
var studentId = 45;
var studentId = 61;
console.log("studentId = " + studentId);


// 'let' is best practice if you want to declare variable and leter want to update values.
let age = 23;
age = 95;
age = 29;

console.log("age = " + age);


// 'const' is helpfull to declare a constant variable because later you cannot change it's value
const PI = 3.14;
console.log("PI = " + PI);

// PI = 3.89;                                  // updating value of 'const' will raise an error
// console.log("PI = " + PI);

// const EPS;                                  // 'const' varaible should be initialized
// console.log("EPS = " + EPS);


let a;                                      // if 'let' is not initilized it is 'undefined'
console.log("a = " + a);