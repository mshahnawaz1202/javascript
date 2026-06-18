// singleton

// const User  = new Object() // singleton
const user ={} // non-singleton
user.id = '123ms'
user.name = "Shah Nawaz"
user.isLoggedIn = false

// console.log(user);

const user1 = {
    email : 'shah@gamil.com',
    fullname : {
        userfullname: {
            firstname : 'shah',
            lastname: 'nawaz'   
        }
    },
    location : 'Chiniot',
    age : 20,
     isLoggedIn : false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(user1);
// console.log(user1.fullname.userfullname.firstname);


const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) // {} => gurantees results
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('name'));

/**================================================================================================================== */

                                                    // object destructuring
const course = {
    coursename: 'Javascript',
    price: '999',
    courseInstructor: "MS"
}

// const {courseInstructor} = course
// console.log(courseInstructor);   
const {courseInstructor: instructor} = course
console.log(instructor);

































