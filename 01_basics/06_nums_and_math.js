//Implicitly define : No properties will be there
const score = 400;

//Explicitly define the datatype Number : this will give many functions like toString() ..

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length); // o/p :3
console.log(balance.toFixed(2)); // o/p :100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString()); // 100,000
console.log(hundreds.toLocaleString('en-IN'));//1,00,00

// MAX_VALUE && MIN_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


// ++++++++++++++++++++++++ Math Object +++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.6));
console.log(Math.ceil(4.2)); // thoda sa bhi 4 se upper gya toh 5 hi aayega
console.log(Math.floor(4.9));// ye 4 hi aayega kyuki lowest wala chahiye
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8)); // 8

console.log(Math.random());// this will give numbers between 0 and 1
// PROBLEM : if 0.04.... comes then value will be 0 , while trying to get the value between 1 and 9
console.log(Math.random()*10);//
//SOLUTION : 
console.log(Math.random()*10 + 1);

// To get exact number 
console.log(Math.floor(Math.random()*10) + 1)

// Get the number from 1 to 6

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/*Formula explanation
   max - min : to get the range and + 1 : to avoid the 0.04.. case
   + min : atleast min value should be there whatever it is generating  
*/
