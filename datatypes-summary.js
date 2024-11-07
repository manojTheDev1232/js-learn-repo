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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) , Heap(Non-Primitive)

// from stack , we will get a copied value but from heap we will get a reference value(orignal can be changed)

let myYoutubeName = "abc"

let anotherName = myYoutubeName
anotherName = "bbc"
console.log(anotherName)
console.log(myYoutubeName)


let name = 'John'; // allocates memory for a string
const age = 24; // allocates memory for a number

name = 'John Doe'; // allocates memory for a new string
const firstName = name.slice(0,6); // allocates memory for a new string
console.log(name)


let userOne = {
    email: "manoj@gmail.com"
}

let userTwo = userOne
userTwo.email = "manojsingh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
