// comparison should be done with same data type

console.log(2>1);

// confusions
console.log(null > 0); // false
console.log(null == 0);// false
console.log(null >= 0);//true

/* The reason is that an equality check == and comparison > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >=0 is true and null > 0 is false.
*/

console.log(undefined == 0);// false


// Strict check

// ===
console.log("2" === 2); // now it checks for datatypes also, no conversion becoz data types are different








