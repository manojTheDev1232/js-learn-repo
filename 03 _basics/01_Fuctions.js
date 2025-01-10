function sayMyName() {
    console.log("Manoj");
}

// sayMyName()

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1 , number2){
    // console.log(number1 + number2);

    // let result = number1 + number2
    // return result;

    return number1 + number2
}
const result = addTwoNumber(3, 5)
// console.log("Result:", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage()); // undefined on passing nothing

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000)); // [500, 2000]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is $`);
    
}
