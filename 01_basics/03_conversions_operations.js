
let score = 33

console.log(typeof score)
// -------------------------------------------------------------------------------------
let score1 = "33"

console.log(typeof score1)

let valueInNumber = Number(score1)

console.log(typeof valueInNumber)

// ----------------------------------------------------------------------------
let score2 = "33abc"
let valueInNumber1 = Number(score2)

console.log(typeof valueInNumber1);
console.log(valueInNumber1);

// ----------------------------------------------------------------------------------------

let score3 = null
let valueInNumber3 = Number(score3)

console.log(typeof valueInNumber3);
console.log(valueInNumber3)


// ----------------------------------------------------------------------------------


let scor = undefined
let valueIn_number = Number(scor)

console.log(typeof valueIn_number);
console.log(valueIn_number)



// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN


// String, Boolean 











// ***************************************** Operations *****************************************************
// *****************************************
// OPERATIONS IN JAVASCRIPT
// *****************************************

let value = 3;

// Unary minus (-) changes a positive number to negative
let negValue = -value;

console.log(negValue); // -3

// -----------------------------------------
// Basic Arithmetic Operators
// -----------------------------------------

console.log(2 + 2); // 4  -> Addition
console.log(2 - 2); // 0  -> Subtraction
console.log(2 * 2); // 4  -> Multiplication
console.log(2 ** 3); // 8 -> Exponent (2^3 = 2 × 2 × 2)

// -----------------------------------------
// String and Number Operations
// -----------------------------------------

// If one operand is a string,
// JavaScript usually converts the other value to string
// and performs concatenation.

console.log('1' + 1);

// Output: "11"
// Explanation:
// String '1' + Number 1
// Number 1 becomes String "1"
// Result: "11"


console.log(1 + '1');

// Output: "11"
// Explanation:
// Number 1 + String "1"
// Number is converted to string
// Result: "11"


console.log('1' + 2 + 2);

// Output: "122"
// Explanation:
// Evaluation happens left to right.
//
// Step 1:
// '1' + 2
// => "12"
//
// Step 2:
// "12" + 2
// => "122"


console.log(2 + 2 + '1');

// Output: "41"
// Explanation:
//
// Step 1:
// 2 + 2 = 4
//
// Step 2:
// 4 + '1'
// => "41"
//
// Because string appears after arithmetic is completed.


console.log(2 + 2 + '1' + 2);

// Output: "412"
//
// Step 1:
// 2 + 2 = 4
//
// Step 2:
// 4 + '1'
// => "41"
//
// Step 3:
// "41" + 2
// => "412"


console.log(2 + '1' + 2);

// Output: "212"
//
// Step 1:
// 2 + '1'
// => "21"
//
// Step 2:
// "21" + 2
// => "212"


// -----------------------------------------
// Important Rule
// -----------------------------------------

// JavaScript evaluates expressions from LEFT TO RIGHT.
//
// If it encounters a string during addition (+),
// it converts remaining values to strings
// and performs concatenation.

console.log(10 + 20 + "30"); // "3030"
//
// Step 1: 10 + 20 = 30
// Step 2: 30 + "30" = "3030"

console.log("10" + 20 + 30); // "102030"
//
// Step 1: "10" + 20 = "1020"
// Step 2: "1020" + 30 = "102030"

console.log(2 - '1');
console.log(2 * '3');

console.log(3 + 4 *5%6);
console.log(true);
console.log(+true);




