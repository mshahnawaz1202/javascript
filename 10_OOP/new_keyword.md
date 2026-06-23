# JavaScript `new` Keyword

## What is the `new` Keyword?

The `new` keyword is used to create an object from a constructor function or class.

It tells JavaScript:

> "Create a new object based on this blueprint."

Without `new`, a constructor function behaves like a normal function.

---

# Why Do We Need `new`?

Before constructor functions, objects were created manually using object literals.

```javascript
const user1 = {
    name: "Alice",
    age: 25
};

const user2 = {
    name: "Bob",
    age: 30
};
```

### Problem

If we need many users, we must repeat the same structure again and again.

To avoid repetition, we create a constructor function.

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;
}
```

Now we can create multiple users using the same blueprint.

```javascript
const user1 = new User("Alice", 25);
const user2 = new User("Bob", 30);
```

This is the purpose of the `new` keyword.

---

# What Happens When `new` Is Used?

When JavaScript sees:

```javascript
const user = new User("Alice", 25);
```

it performs four automatic steps.

---

## Step 1: Create an Empty Object

JavaScript creates a brand new empty object.

```javascript
{}
```

Internally:

```javascript
const obj = {};
```

---

## Step 2: Bind `this` to the New Object

Inside the constructor, `this` refers to the newly created object.

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;
}
```

Internally:

```javascript
obj.name = name;
obj.age = age;
```

Result:

```javascript
{
    name: "Alice",
    age: 25
}
```

---

## Step 3: Link the Prototype

JavaScript connects the object to the constructor's prototype.

```javascript
obj.__proto__ = User.prototype;
```

This allows the object to access shared methods.

```javascript
User.prototype.greet = function () {
    console.log("Hello");
};
```

Now every instance can use:

```javascript
user.greet();
```

---

## Step 4: Return the Object

JavaScript automatically returns the newly created object.

Internally:

```javascript
return obj;
```

So:

```javascript
const user = new User("Alice", 25);
```

is approximately equivalent to:

```javascript
const obj = {};

obj.__proto__ = User.prototype;

User.call(obj, "Alice", 25);

return obj;
```

---

# Without `new`

```javascript
function User(name) {
    this.name = name;
}

const user = User("Alice");
```

JavaScript treats this as a normal function call.

No object is created.

---

## In Strict Mode

```javascript
"use strict";

function User(name) {
    this.name = name;
}

User("Alice");
```

Output:

```javascript
TypeError
```

Because:

```javascript
this === undefined
```

---

## In Non-Strict Mode

```javascript
function User(name) {
    this.name = name;
}

User("Alice");
```

`this` points to the global object.

```javascript
window.name = "Alice";
```

or in Node.js:

```javascript
global.name = "Alice";
```

This can create unexpected bugs.

---

# With `new`

```javascript
function User(name) {
    this.name = name;
}

const user = new User("Alice");

console.log(user);
```

Output:

```javascript
User {
    name: "Alice"
}
```

A new object is created safely.

---

# Complete Example

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1);
console.log(person2);
```

Output:

```javascript
Person { name: 'Alice', age: 25 }
Person { name: 'Bob', age: 30 }
```

---

# Using `new` with Classes

The `new` keyword is also used with ES6 classes.

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
}

const user = new User("Alice");

console.log(user);
```

Output:

```javascript
User { name: 'Alice' }
```

Without `new`:

```javascript
const user = User("Alice");
```

Output:

```javascript
TypeError: Class constructor User cannot be invoked without 'new'
```

---

# Summary

| Action           | Without `new` | With `new` |
| ---------------- | --------------- | ------------ |
| Creates object   | ❌ No           | ✅ Yes       |
| Binds `this`   | ❌ No           | ✅ Yes       |
| Links prototype  | ❌ No           | ✅ Yes       |
| Returns object   | ❌ No           | ✅ Yes       |
| Creates instance | ❌ No           | ✅ Yes       |

---

# Interview Answer

### What does the `new` keyword do in JavaScript?

The `new` keyword creates an object from a constructor function or class. It automatically:

1. Creates a new empty object.
2. Binds `this` to that object.
3. Links the object to the constructor's prototype.
4. Executes the constructor code.
5. Returns the newly created object.

Without `new`, the function behaves like a normal function call and does not create an instance.
