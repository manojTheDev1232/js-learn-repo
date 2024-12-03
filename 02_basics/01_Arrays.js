//Array Object

const myArr = [0,1,2,3,4,5]

// Arrays are resizable means we can add more elements and mix of different data types
// Javascript array-copy operations create shallow copies.

//Shallow copy : a shallow copy of an object is a copy whose properties share the same references,means changes will effect the original one

//Deep Copy : A deep copy of an object is a copy whose properties donot share the same references.

const myHeros = ["Captain America","Iron-Man"]
const myArry2 = new Array(1,2,3,4)

//Array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9) /* [
//     9, 0, 1, 2,
//     3, 4, 5
//   ] adds at first place*/ 
// myArr.shift() // removes element at first place

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof(newArr)); // string

//slice and splice

console.log("Original ", myArr);
const myn1 = myArr.slice(1,3) // extract the part [1,2], includes the range. -2 refers to the second to last element of the array.
console.log(myn1)
console.log("After slice myArr",myArr); 

const myn2= myArr.splice(1,3);
console.log(myn2);// extract part [1,2,3]
console.log("After splice myArr",myArr); // original got changed [0,4,5] deleted the extracted elements





