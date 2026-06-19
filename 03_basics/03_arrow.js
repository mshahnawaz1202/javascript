const user = {
    username: 'shahnawaz',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = 'saim'
// user.welcomeMessage()
// console.log('--------------------------------');

// console.log(this);


// function engineer()
// {
//     let username = 'shahnawaz'
//     // console.log(this);
//     console.log(this.username); // gives undefined, it does not works inside funcions
    
    
// }

// engineer()

// ++++++++++++++++++++++++++++++++++++++++++++++++++ Arrorw Function +++++++++++++++++++++++++++++++++++++++
const arrowFun = () =>{
    let username = 'shahnawaz'
    console.log(this);
    console.log(this.username);
    
}

// arrowFun()


const addTwo = ( num1, num2 ) =>{
    return num1+num2
}

console.log(addTwo(3,5));


// ================================== Implicit return ===========================
const addTwoImplicit = ( num1, num2 ) => num1+num2  

console.log(addTwoImplicit(6,7));

// one more method

const square = (num1) => (num1*num1)
console.log(square(5));


//
const createUser = () => 
(
    {
        username: 'Shahnawaz',
        age: 20,
    }
)

console.log(createUser());



// ======================================================
// 11. ARROW FUNCTION IN ARRAY
// ======================================================

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(
    (value) => {
    console.log(value);    
}
);







