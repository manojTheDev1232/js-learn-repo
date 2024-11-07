let score = "33abc" 

// console.log(typeof score);

/*  const {score} = req.body 
  we are not sure what type of value we are getting */

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// Be carefull with Conversion with Number in javascript

// "33" => 33
// "33abc" => NaN
// true =>1 : false => 0


let isLoggedIn = "manoj"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 =>true; 0 => false
// "" => false
// "manoj" => true

/* String conversion */

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)