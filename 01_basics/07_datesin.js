/* +++++++++++++++++ Date Object ++++++++++++++++++++++

Javascript Date objects represent a single moment in time.
Gives an integral number (in miliseconds) which begins from : January 1, 1970

*/


let myDate = new Date();
console.log(typeof(myDate));
console.log(myDate); // 2024-12-03T14:53:12.782Z

console.log(myDate.toString()); // Tue Dec 03 2024 14:53:55 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Tue Dec 03 2024

console.log(myDate.toLocaleDateString()); // 12/3/2024



// let myCreateDate = new Date(2023,0,23) // in javascript month starts from 0
// console.log(myCreateDate.toDateString()); //  Mon Jan 23 2023
let myCreateDate = new Date(2023, 0, 23, 5, 3) 

console.log(myCreateDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

// MM-DD-YYYY
let customDate = new Date("01-14-2023")
console.log(customDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() 
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
// we can compare both , to get the winner


//Convert to seconds
console.log(Math.floor(Date.now()/1000)); // floor used to avoid decimals

let newDate = new Date();
// console.log(newDate.getMonth() + 1);

// console.log(newDate.getDay());

//Customize the Date
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:"2-digit"
}))











