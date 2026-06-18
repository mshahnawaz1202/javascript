
// singelton => when we make object through constructor then it is singleton bcz no other object like this will made

// Object.create()

/** --------------------------------------------------------------------------------------------------- */
// object literals

const mySym = Symbol('key1')

const User = {
    name : "Shah Nawaz",
    "full name": "Muhammad Shah Nawaz",
    age : 18,
    [mySym] : "mykey1", // for symbol representation in object
    location : 'Chiniot',
    email : "shahnawaz@gamil.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Friday"]

}

// console.log(User.name); // not recommended bcz string key is not accessed with it
// console.log(User['name']); // best method bcz we can access all keys even in String
// console.log(User['full name']);
// console.log(User[mySym]);


User.email = "shahnawaz@google.com"
// Object.freeze(User) // after this no changes will be in Object
User.email = "Shahnawaz.com"

// console.log(User);


User.greeting = function(){
    console.log(`Hello ${this["full name"]}`);
    
}

console.log(User.greeting());






