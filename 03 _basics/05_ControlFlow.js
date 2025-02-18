const userLoggedIn = true

if(userLoggedIn){
    console.log(`yes User is loggedIn`)
}


const debitCard = true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
    
}