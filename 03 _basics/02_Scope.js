// var c = 300 
let a =300
if (true) {
  let a = 10
  const b = 20
//   var c =30  
// console.log("inner:", a);

} 

// var has scope anywhere in the program, avoid or be careful while using var.

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
        // console.log(website); // Gives error so two() will never be executed
    }
    // console.log(website);  Not accessible

    // Point to be noted : execution will be line by line that is why two() will not be executed

    // two() 
    
}
one()

// Similar thing in if else

if(true){
  const username ="hitesh"

    if(username == "hitesh")
    {
      const website ="youtube"
      // console.log(username + website);
      
    }
    // console.log(website); Gives error - ReferenceError: website is not defined
    
}
// console.log(username); Giver error - ReferenceError: username is not defined



//+++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++//
// 1. No error 

addOne(5)

function addOne(num){
  return num + 1
}



//2. Having Error  (ReferenceError: Cannot access 'addTwo' before initialization)

addTwo(5)  // HOISTING
const addTwo = function(num){
    return num + 2
}

