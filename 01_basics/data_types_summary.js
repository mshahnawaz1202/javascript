// ======================================================
// JAVASCRIPT DATA TYPES + MEMORY (STACK vs HEAP)
// ======================================================


// ------------------------------------------------------
// 1. PRIMITIVE DATA TYPES (Stored by VALUE)
// ------------------------------------------------------

/*
Primitive types in JavaScript:
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt

Key points:
- Stored in stack memory
- Copy creates independent value
- No shared reference
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

// Symbol: always unique even if description is same
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

// BigInt: large integer values
const bigNumber = 3456543576654356754n;


// ------------------------------------------------------
// 2. REFERENCE (NON-PRIMITIVE) TYPES
// ------------------------------------------------------

/*
Reference types:
1. Array
2. Object
3. Function

Key points:
- Stored in heap memory
- Variable stores reference (address)
- Copy shares same reference
*/

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
};

// Function expression
const myFunction = function () {
    console.log("Hello world");
};

console.log(typeof anotherId); // symbol

let newFunction = function () {
    console.log("Hi");
};

newFunction();

function greeet() {
    console.log('..');
}

greeet();

console.log(myObj);


// ------------------------------------------------------
// 3. STACK MEMORY (PRIMITIVE TYPES)
// ------------------------------------------------------

/*
Behavior:
- Stores primitive values
- Copy creates independent variable
*/

let name1 = 'shahnawaz';
let name2 = name1;

console.log(name1);
console.log(name2);

name2 = 'shah';

console.log(name1);
console.log(name2);


// ------------------------------------------------------
// 4. HEAP MEMORY (REFERENCE TYPES)
// ------------------------------------------------------

/*
Behavior:
- Stores objects, arrays, functions
- Copy shares same reference
*/

let user1 = {
    name: "shahnawaz",
    age: 20
};

let user2 = user1;

console.log(user1);
console.log(user2);

user2.age = 19;

console.log(user1);
console.log(user2);


// ------------------------------------------------------
// 5. SUMMARY
// ------------------------------------------------------

/*
Primitive types:
- Stored in stack
- Copy is independent

Reference types:
- Stored in heap
- Copy shares same reference

Symbol:
- Always unique value even if description matches
*/