// const score = 400
// console.log(score); //400

// const balance = new Number(500)
// console.log(balance); //[Number: 500]

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toLocaleString());
// console.log(balance.toFixed(1));

// const num2 = 1223.893837
// console.log(num2.toPrecision(2));


// const num = 10000000
// console.log(num.toLocaleString());

// console.log(num.toLocaleString('en-IN'));


/** ----------------------------------- MATH --------------------------------- */

console.log(Math);




// ------------------------------------------------------
// BASIC CONSTANTS
// ------------------------------------------------------

console.log(Math.PI);       // 3.141592653589793
console.log(Math.E);        // 2.718281828459045
console.log(Math.SQRT2);    // 1.4142135623730951


// ------------------------------------------------------
// ROUNDING METHODS
// ------------------------------------------------------

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(4.9));  // 5

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4

console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

//  Floor = "go to floor below" (always lower)
// Trunc = "truncate" (cut decimal only)



// ------------------------------------------------------
// ABSOLUTE VALUE
// ------------------------------------------------------

console.log(Math.abs(-10)); // 10
console.log(Math.abs(10));  // 10


// ------------------------------------------------------
// POWER & ROOT
// ------------------------------------------------------

console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(25));  // 5
console.log(Math.cbrt(27));  // 3


// ------------------------------------------------------
// MINIMUM & MAXIMUM
// ------------------------------------------------------

console.log(Math.min(10, 20, 5, 30)); // 5
console.log(Math.max(10, 20, 5, 30)); // 30


// ------------------------------------------------------
// RANDOM NUMBERS
// ------------------------------------------------------

console.log(Math.random());

/*
Math.random()

Range:
0 <= value < 1

Examples:
0.12
0.76
0.45
*/

// Random number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);


// Random number from 1 to 100
console.log(Math.floor(Math.random() * 100) + 1);


// Random number between min and max
let min = 10;
let max = 20;

console.log(
    Math.floor(Math.random() * (max - min + 1)) + min
);


// ------------------------------------------------------
// LOGARITHMS
// ------------------------------------------------------

console.log(Math.log(10));    // Natural log
console.log(Math.log10(100)); // 2
console.log(Math.log2(8));    // 3


// ------------------------------------------------------
// TRIGONOMETRIC FUNCTIONS
// ------------------------------------------------------

console.log(Math.sin(0));      // 0
console.log(Math.cos(0));      // 1
console.log(Math.tan(0));      // 0

console.log(Math.asin(1));
console.log(Math.acos(1));
console.log(Math.atan(1));


// ------------------------------------------------------
// HYPOTENUSE
// ------------------------------------------------------

console.log(Math.hypot(3, 4)); // 5


// ------------------------------------------------------
// SIGN
// ------------------------------------------------------

console.log(Math.sign(10));  // 1
console.log(Math.sign(-10)); // -1
console.log(Math.sign(0));   // 0


// ------------------------------------------------------
// EXPONENTIAL FUNCTIONS
// ------------------------------------------------------

console.log(Math.exp(1));  // e^1
console.log(Math.exp(2));  // e^2


// ------------------------------------------------------
// NUMBER CHECKS
// ------------------------------------------------------

console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false

console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN(10));       // false


// ------------------------------------------------------
// COMMON INTERVIEW QUESTIONS
// ------------------------------------------------------

// Random dice (1-6)
console.log(
    Math.floor(Math.random() * 6) + 1
);


// Random coin toss
let toss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(toss);


// Square of a number
let n = 5;
console.log(Math.pow(n, 2));


// Cube of a number
console.log(Math.pow(n, 3));


// Square root
console.log(Math.sqrt(64));


// ------------------------------------------------------
// MOST USED METHODS
// ------------------------------------------------------

/*
Math.round()
Math.ceil()
Math.floor()
Math.trunc()

Math.abs()

Math.min()
Math.max()

Math.pow()
Math.sqrt()

Math.random()

Math.PI

These are the methods used most frequently in
real-world JavaScript and interviews.
*/





const maxi = 20
const mini = 10

console.log(Math.floor(Math.random()*(maxi-mini+1))+10);






