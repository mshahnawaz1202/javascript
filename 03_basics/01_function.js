function addNumbers(num1, num2) {
    // console.log(`Sum of the Numbers ${num1} and ${num2} is ${num1 + num2}`);
    return num1+num2;
}



let result = addNumbers(3,4);
// console.log('Result :',result);
// console.log('Result :',addNumbers()); // undefined






// function calculatePrice(num1) // it print only first argument and we use then rest operator here
// {
//     return num1;
// }


// console.log(calculatePrice(200,300,400)) // 200

/**------------------ Rest Operator ----------------------- */

// function calculatePrice(...num1)// prints all values like placed them in a container type known as array
// {
//     return num1;
// }


// console.log(calculatePrice(200,300,400)) // [ 200, 300, 400 ]





function calculatePrice(val1,val2,...num1)// prints all values like placed them in a container type known as array
{
    return num1;
}

// val1 takes 200 and val2 takes 300 and remaining in num1 


// console.log(calculatePrice(200,300,400,500,2000)) //[ 400, 500, 2000 ]

// ---------------------------------------------------------------------------------------------------------------------------------

// passing objects to functions
const user = {
    name: 'Shah Nawaz',
    age: 20
}

function handleObject(anyObject)
{
    console.log(anyObject);
}

// handleObject(user)
// handleObject(
//     {
//         name: 'Shah Nawaz',
//         age: 20
//     }
// )



// passing arrays to functions

const arr = [ 1, 2, 3, 4 ]
function printArray(arr1){
    console.log(arr1);
    
}

printArray(arr)




















