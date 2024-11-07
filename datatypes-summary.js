/******************************INTERVIEW POINT OF VIEW**********************************************/

// Primitive (Call by Value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt //

const score = 100
const scoreValue = 100.3

const isLoggedIn =false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

const bigNumber = 34324354353453453n


// Reference type (Non primitive)

// Array, Objects, Functions

const heros =["shaktiman","naagraj","doga"]

let myObj = {
    name: "manoj",
    age:"26",
}

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction); // function