const name = "manoj"
const repoCount = 50

// console.log(name + repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String interpolation better than above one

const gameName = new String('hitesh')

// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length);


console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//##################################  substring method ####################################################
const newString = gameName.substring(0, 4) // disobey the -ve value at place of 0
console.log(newString);

const anotherString = gameName.slice(-8, 4)// we can put -ve value
console.log(anotherString)

//##################################  slice method ####################################################

/* Slice method extracts a section of this string and returns it as a new string, without modifying the 
   original string. */

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-9));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

//##################################  trim method ####################################################

const newStringOne = "   manoj   "
console.log(newStringOne);
console.log(newStringOne.trim());

//##################################  replace method ####################################################

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('com')); //true

const stringToArray = "Manoj-Singh-Munda"
console.log(stringToArray.split('-'));




