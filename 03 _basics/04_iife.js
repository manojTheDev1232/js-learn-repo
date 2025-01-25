// Immediately Invoked Function Expressions (IIFE)


// Normal case
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

/* Usecases:

 1. File has only database connection code. And we want to start database connection as soon as application starts.
 2. To avoid pollution from global scope. we don't want any problems in our function because of global variables.
 
*/

// IIFE case
(function chai(){
    console.log(`DB CONNECTED`);
})();

/* Without semicolon it will run if code is till line no:20 , but to end the IIFE function always use semicolon */

// Interview point of view : Function which immediately gets executed .sometimes we get problems because of global scope variable, to avoid such problems we use IIFE.

//IIFE using arrow function

( () => {
    console.log(`DB CONNECTED TWO`);
    
})();

( () => {
    console.log(`DB CONNECTED THREE`);
    
})();