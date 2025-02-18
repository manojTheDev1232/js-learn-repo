const userEmail ="@hitesh.ai"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");
    
}


//Falsy values

// false, 0, -0, BigInt 0n, "",null, undefined, Nan /


// Truthy Values

// "0", 'false', " ",[],{}, function(){}





// const mails = []

// if (mails.length === 0) {
//     console.log("Array is empty");
    
// }


const emptyObj = {}


if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}


// Few Important things

false == 0; true
false == ''; true
0 == ''; true

// Nullish Coalscing Operator (??): null defined
// Null safety : sometimes we get data from DB or get Null. So to handle such error we can use ?? operator
let val1;
val1 = 5 ?? 10 // assign any of these
console.log(val1);  // 5
val1 = null ?? 10 // gives you 10
val1 = undefined ?? 15 // gives you 15

val1 = null ?? 10 ?? 20 // first value assigned

//It is a Fallback : incase we want to assign value to error

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

