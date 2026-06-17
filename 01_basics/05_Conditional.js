// ======================================================
// JAVASCRIPT CONDITIONAL OPERATIONS - COMPLETE FILE
// ======================================================

/*
This file includes:
1. if / else
2. else-if ladder
3. nested if
4. ternary operator
5. logical operators (&&, ||, !)
6. switch statement
7. truthy / falsy values
8. nullish coalescing (??)
9. optional chaining (?.)
*/


// ------------------------------------------------------
// 1. IF STATEMENT
// ------------------------------------------------------

let age = 18;

if (age >= 18) {
    console.log("Eligible to vote");
}


// ------------------------------------------------------
// 2. IF...ELSE
// ------------------------------------------------------

let age2 = 16;

if (age2 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// ------------------------------------------------------
// 3. ELSE IF LADDER
// ------------------------------------------------------

let marks = 82;

if (marks >= 90) {
    console.log("A grade");
} else if (marks >= 70) {
    console.log("B grade");
} else if (marks >= 50) {
    console.log("C grade");
} else {
    console.log("Fail");
}


// ------------------------------------------------------
// 4. NESTED IF
// ------------------------------------------------------

let age3 = 20;
let hasID = true;

if (age3 >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
}


// ------------------------------------------------------
// 5. TERNARY OPERATOR
// ------------------------------------------------------

let age4 = 17;

let result = (age4 >= 18) ? "Adult" : "Minor";

console.log(result);


// ------------------------------------------------------
// 6. LOGICAL OPERATORS
// ------------------------------------------------------

// AND (&&)
let age5 = 20;
let hasLicense = true;

if (age5 >= 18 && hasLicense) {
    console.log("Can drive");
}

// OR (||)
let isStudent = false;
let isMember = true;

if (isStudent || isMember) {
    console.log("Discount available");
}

// NOT (!)
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please login");
}


// ------------------------------------------------------
// 7. SWITCH STATEMENT
// ------------------------------------------------------

let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid day");
}


// ------------------------------------------------------
// 8. TRUTHY / FALSY VALUES
// ------------------------------------------------------

let value = "";

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Falsy values (important list):
// false, 0, -0, "", null, undefined, NaN


// ------------------------------------------------------
// 9. NULLISH COALESCING (??)
// ------------------------------------------------------

let userName = null;

let displayName = userName ?? "Guest";// if null then default value Guest

console.log(displayName);


// ------------------------------------------------------
// 10. OPTIONAL CHAINING (?.)
// ------------------------------------------------------

let user = {
    name: "Ali"
};

console.log(user?.address?.city); // undefined safely


// ------------------------------------------------------
// 11. COMBINED REAL-WORLD EXAMPLE
// ------------------------------------------------------

let userAge = 19;
let userHasID = true;
let userLogin = true;

if (userLogin && userAge >= 18 && userHasID) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}