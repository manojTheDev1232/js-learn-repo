// const tinderUser = new Object()// singleton object

const tinderUser ={} // non singleton object

tinderUser.id ="123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"hitesh",
            lastname:"singh"
            
        }
    }
}

console.log(regularUser.fullname.userfullname);
//Hint further we will learn optional chaining --- regularUser.fullname?.userfullname

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}    O/P : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)     O/P :  { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2} // Spread Operator (90% use)
console.log(obj3) 


// Data from DB

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]


users[1].email
console.log(tinderUser);


// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

 

// Object Destructuring

const course = {
    coursename: " js in hindi",
    price: "99",
    courseInstructor: "hitesh"
}

// course.courseIntructor

const {courseInstructor: instructor} = course

console.log(instructor);




