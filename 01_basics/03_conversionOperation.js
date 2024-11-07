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
// console.log(booleanIsLoggedIn)

// 1 =>true; 0 => false
// "" => false
// "manoj" => true

/* String conversion */

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ***************************** Operations*********************************************//

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " manoj"

let str3 = str1 + str2
console.log(str3);

// confusion statements   -- complex situation

// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32

// console.log(+true); //1
// console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100 
gameCounter++;
console.log(gameCounter);


