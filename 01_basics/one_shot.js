/****************************************************
 * JAVASCRIPT COMPLETE BEGINNER NOTES + EXAMPLES
 ****************************************************/

/***********************
1. INTRODUCTION
************************/
console.log("JavaScript Basics Start");

/***********************
2. VARIABLES (let, const, var)
************************/
var oldVar = 10;
let modernLet = 20;
const fixedValue = 30;

console.log(oldVar, modernLet, fixedValue);

/***********************
3. DATA TYPES
************************/
let str = "Hello";
let num = 100;
let isActive = true;
let empty = null;
let notDefined;

let obj = { name: "Ali", age: 20 };
let arr = [1, 2, 3];

console.log(typeof str, typeof num);

/***********************
4. TYPE CONVERSION
************************/
console.log("5" + 1); // "51"
console.log("5" - 1); // 4

let converted = Number("10");
console.log(converted + 5);

/***********************
5. COMPARISON
************************/
console.log("5" == 5);  // true
console.log("5" === 5); // false

/***********************
6. STACK VS HEAP (concept demo)
************************/
let a = 10;
let b = a;
b = 20;

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 50;

console.log(a, b);
console.log(obj1.value);

/***********************
7. STRING METHODS
************************/
let name = "JavaScript";

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.slice(0, 4));

/***********************
8. NUMBER & MATH
************************/
console.log(Math.abs(-10));
console.log(Math.round(4.7));
console.log(Math.random());

/***********************
9. DATE & TIME
************************/
let date = new Date();
console.log(date.toString());

/***********************
10. ARRAYS
************************/
let numbers = [10, 20, 30];

numbers.push(40);
numbers.pop();

console.log(numbers);

/***********************
11. ARRAY METHODS
************************/
let nums = [1, 2, 3, 4];

nums.forEach(n => console.log("forEach:", n));

/***********************
12. OBJECTS
************************/
let user = {
  name: "Ali",
  age: 22,
  city: "Islamabad"
};

console.log(user.name);

/***********************
13. NESTED OBJECTS
************************/
let student = {
  name: "Ahmed",
  address: {
    city: "Lahore",
    country: "Pakistan"
  }
};

console.log(student.address.city);

/***********************
14. OBJECT DESTRUCTURING
************************/
let car = { brand: "Toyota", model: "Corolla" };

let { brand, model } = car;
console.log(brand, model);

/***********************
15. FUNCTIONS
************************/
function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

/***********************
16. FUNCTION WITH OBJECT
************************/
function printUser(u) {
  console.log(u.name);
}

printUser(user);

/***********************
17. SCOPE
************************/
let globalVar = "I am global";

function scopeTest() {
  let localVar = "I am local";
  console.log(globalVar);
}

scopeTest();

/***********************
18. HOISTING DEMO
************************/
console.log(hoistedVar); // undefined
var hoistedVar = 99;

/***********************
19. THIS & ARROW FUNCTION
************************/
let person = {
  name: "Ali",
  show: function () {
    console.log(this.name);
  }
};

person.show();

const multiply = (x, y) => x * y;
console.log(multiply(3, 4));

/***********************
20. IIFE
************************/
(function () {
  console.log("IIFE executed immediately");
})();

/***********************
21. CONTROL FLOW
************************/
let age = 20;

if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

/***********************
22. LOOPS
************************/
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log("for loop:", i);
}

let i = 0;
while (i < 3) {
  console.log("while:", i);
  i++;
}

/***********************
23. HIGHER ORDER ARRAY METHODS
************************/
let arr2 = [1, 2, 3, 4, 5];

arr2.forEach(n => console.log(n));

/***********************
24. MAP
************************/
let doubled = arr2.map(n => n * 2);
console.log("map:", doubled);

/***********************
25. FILTER
************************/
let evens = arr2.filter(n => n % 2 === 0);
console.log("filter:", evens);

/***********************
26. REDUCE
************************/
let sum = arr2.reduce((acc, n) => acc + n, 0);
console.log("reduce:", sum);

/***********************
END
************************/
console.log("JavaScript Basics End");