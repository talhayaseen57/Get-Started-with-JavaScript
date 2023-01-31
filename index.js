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
// const --> scope is within block but value cannot be resassigned once intialized
function sayHello() {
    // if i is declared with var then console.log(i) after for loop can access the variable i
    // if i is declared with let then console.log(i) after for loop cannot access the variable i
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }

    // console.log(i);
}
sayHello();

// objects
const laptop = {
    company: "DELL",            // property of object
    trainData: function() {},   // method --> way 1 to define method inside an object
    executeCode() {             // method --> way 2 to define method inside an object
        console.log(this);
    }
};

console.log(laptop.company);

let targetMember = 'company';       // to avoid hard-coding
laptop[targetMember] = "ASUS";
console.log(laptop['company']);

/*
    The "this" keyword
    value of this is dedtermined how the function containing this is called
*/

// if we call a function as method of an object "this" will refer to that specific object
laptop.executeCode();

// we are not calling executeCode function, we are just getting a reference to the executeCode func
const execute1 = laptop.executeCode;
console.log(execute1);
// if we call a function as a standlon object or outside the object, "this" will refer to global object which is windows here
execute1();


/*
    Binding --> creating a permanent refrence to an object
*/

// this way "this" keyword will refer to the laptop object, doesn't matter what and how we call the func
const execute2 = laptop.executeCode.bind(laptop);
console.log(execute2);
execute2();

// functions and arrow functions in ECMAScript5
const square1 = function (number) {
    return number*number;
}

const square2 = number => number*number;

console.log(square1(5));
console.log(square2(5))

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: true}
]

const activeJobs1 = jobs.filter(function (job) {return job.isActive});
const activeJobs2 = jobs.filter(job => !job.isActive);

console.log(activeJobs1);
console.log(activeJobs2);