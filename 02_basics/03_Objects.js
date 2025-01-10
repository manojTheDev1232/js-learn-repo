//singleton : created by constructor
// Object.create
//Object literals

const mySym = Symbol("key1")

const JsUser = {
    //here name, age are kept as string, so console.log(JsUser[email]) give error
    name:"Hitesh",
    "full name":"Hitesh Choudhary",// not accessible with . operator only []
    [mySym]:"mykey1", // Very important
    age:26,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoogedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof(JsUser[mySym])); // string but we wanted symbol

//we can change the object like this
JsUser.email = "hitesh@chatgpt.com"

// we can freeze the object to avoid changes
// Object.freeze(JsUser);
JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser)
/*
{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 26,
  location: 'jaipur',
  email: 'hitesh@chatgpt.com',
  isLoogedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol()]: 'mykey1'
}
*/

// lets add function inside the JsUser

JsUser.greeting = function () {
    console.log("Hello JS user");
}


JsUser.greetingTwo = function () {
    console.log(`Hello JS user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



