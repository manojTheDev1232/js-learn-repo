const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this is used to refer current context(Scope). which helps to access the variable inside the user.
        console.log(this);
        
    }
}


// user.welcomeMessage();// hitesh, welcome to website
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); // o/p :{}, bcoz as global context we got empty object

// function chai()
// {
//     let username = "hitesh"
//     console.log(this.username); O/P : [Undefined] // we can't use "this" like this
// }
// chai()

// function chai()
// {
//     let username = "hitesh"
//     console.log(this.username); // we can't use "this" like this
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this);
    
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2               if curly braces then return keyword is must
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // No Return keyword

//How to return an object

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3,4));

