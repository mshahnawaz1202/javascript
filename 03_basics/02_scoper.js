// ======================================================
// JAVASCRIPT SCOPE - COMPLETE FILE
// ======================================================

/*
Scope determines where variables can be accessed.

Types:
1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope (Nested Scope)
5. Scope Chain

Important:
- let and const are block scoped
- var is function scoped
*/


// ======================================================
// 1. GLOBAL SCOPE
// ======================================================

let globalVariable = "I am Global";

console.log(globalVariable);

function accessGlobal() {
    console.log(globalVariable);
}

accessGlobal();


// ======================================================
// 2. FUNCTION SCOPE
// ======================================================

function functionScopeExample() {

    let functionVariable = "I am inside function";

    console.log(functionVariable);
}

functionScopeExample();

// console.log(functionVariable);
// ReferenceError


// ======================================================
// 3. BLOCK SCOPE
// ======================================================

if (true) {

    let blockLet = "Block Let";
    const blockConst = "Block Const";

    console.log(blockLet);
    console.log(blockConst);
}

// console.log(blockLet);
// console.log(blockConst);
// ReferenceError


// ======================================================
// 4. VAR IS NOT BLOCK SCOPED
// ======================================================

if (true) {

    var blockVar = "Var survives block";
}

console.log(blockVar);


// ======================================================
// 5. LET, CONST AND VAR COMPARISON
// ======================================================

{
    let a = 10;
    const b = 20;
    var c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

// console.log(a);
// ReferenceError

// console.log(b);
// ReferenceError

console.log(c);


// ======================================================
// 6. NESTED SCOPE
// ======================================================

function outerFunction() {

    let username = "Shahnawaz";

    function innerFunction() {

        let website = "GitHub";

        console.log(username);
        console.log(website);
    }

    innerFunction();

    // console.log(website);
    // ReferenceError
}

outerFunction();


// ======================================================
// 7. LEXICAL SCOPE
// ======================================================

function parent() {

    let parentVariable = "Parent";

    function child() {

        console.log(parentVariable);
    }

    child();
}

parent();


// ======================================================
// 8. SCOPE CHAIN
// ======================================================

let globalValue = "Global";

function first() {

    let firstValue = "First";

    function second() {

        let secondValue = "Second";

        console.log(globalValue);
        console.log(firstValue);
        console.log(secondValue);
    }

    second();
}

first();


// ======================================================
// 9. CHILD CAN ACCESS PARENT
// ======================================================

function one() {

    const username = "Shahnawaz";

    function two() {

        const website = "YouTube";

        console.log(username);
        console.log(website);
    }

    two();
}

one();


// ======================================================
// 10. PARENT CANNOT ACCESS CHILD
// ======================================================

function parentFunction() {

    let parentData = "Parent Data";

    function childFunction() {

        let childData = "Child Data";

        console.log(parentData);
        console.log(childData);
    }

    childFunction();

    // console.log(childData);
    // ReferenceError
}

parentFunction();


// ======================================================
// 11. BLOCK SCOPE WITH IF
// ======================================================

const age = 20;

if (age >= 18) {

    let message = "Adult";

    console.log(message);
}

// console.log(message);
// ReferenceError


// ======================================================
// 12. BLOCK SCOPE WITH LOOP
// ======================================================

for (let i = 0; i < 3; i++) {

    console.log(i);
}

// console.log(i);
// ReferenceError


// ======================================================
// 13. VAR INSIDE LOOP
// ======================================================

for (var j = 0; j < 3; j++) {

    console.log(j);
}

console.log(j);


// ======================================================
// 14. SHADOWING
// ======================================================

let city = "Islamabad";

function showCity() {

    let city = "Lahore";

    console.log(city);
}

showCity();

console.log(city);


// ======================================================
// 15. GLOBAL VS LOCAL
// ======================================================

let name = "Global Name";

function displayName() {

    let name = "Local Name";

    console.log(name);
}

displayName();

console.log(name);


// ======================================================
// 16. INTERVIEW QUESTION
// ======================================================

if (true) {

    let x = 10;
    const y = 20;
    var z = 30;
}

// console.log(x);
// ReferenceError

// console.log(y);
// ReferenceError

console.log(z);


// ======================================================
// 17. REAL-WORLD EXAMPLE
// ======================================================

const appName = "My Application";

function login() {

    const user = "Shahnawaz";

    function showProfile() {

        console.log(appName);
        console.log(user);
    }

    showProfile();
}

login();


// ======================================================
// SUMMARY
// ======================================================

/*
Global Scope
- Accessible everywhere

Function Scope
- Accessible only inside function

Block Scope
- Created by {}
- Works with let and const

var
- Function scoped
- Ignores block scope

Lexical Scope
- Child can access parent variables

Scope Chain
- JavaScript searches:
  Current Scope
  → Parent Scope
  → Global Scope

Modern JavaScript:
- Prefer const
- Use let when value changes
- Avoid var
*/