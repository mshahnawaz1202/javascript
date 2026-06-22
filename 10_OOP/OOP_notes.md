# JavaScript and Classes

## OOP (Object-Oriented Programming)

Object-Oriented Programming (OOP) is a programming paradigm that organizes code around **objects** rather than functions or procedures.

An object contains:

* **Properties** (data/state)
* **Methods** (behavior/actions)

### Real World Example

```text
Car
├── Properties
│   ├── color
│   ├── brand
│   └── speed
│
└── Methods
    ├── start()
    ├── stop()
    └── accelerate()
```

In OOP, we model real-world entities as objects.

---

# Object

An object is a collection of related data and functionality.

```javascript
const user = {
    name: "Shahnawaz",
    age: 25,

    greet() {
        console.log("Hello");
    }
};
```

### Structure

```text
user
├── name: "Shahnawaz"
├── age: 25
└── greet()
```

### Built-in Objects

JavaScript already provides many objects:

```javascript
const str = "HELLO";

str.toLowerCase();
```

```text
String Object
    |
    └── toLowerCase()
```

Here `toLowerCase()` is a method available on String objects.

---

# Why Use OOP?

Without OOP:

```text
Variables
Functions
Variables
Functions
Variables
Functions
```

Code becomes difficult to organize and maintain.

With OOP:

```text
User Object
├── data
└── methods

Product Object
├── data
└── methods

Order Object
├── data
└── methods
```

### Benefits

* Better code organization
* Reusability
* Easier maintenance
* Scalability
* Better modeling of real-world entities
* Reduced code duplication

---

# Parts of OOP in JavaScript

```text
OOP
├── Object Literals
├── Constructor Functions
├── Prototypes
├── Classes
└── Instances
```

---

# 1. Object Literal

The simplest way to create an object.

```javascript
const user = {
    username: "john",
    loginCount: 5,

    signIn() {
        console.log("User signed in");
    }
};
```

### Diagram

```text
user
├── username
├── loginCount
└── signIn()
```

### Problem

If we need 100 users:

```javascript
const user1 = {...}
const user2 = {...}
const user3 = {...}
```

Code duplication occurs.

---

# 2. Constructor Function

Used to create multiple objects from a blueprint.

```javascript
function User(username, email) {
    this.username = username;
    this.email = email;
}

const user1 = new User("john", "john@gmail.com");
const user2 = new User("sam", "sam@gmail.com");
```

### Flow

```text
             User()
                |
        ----------------
        |              |
        v              v
     user1          user2
```

### What does `new` do?

```text
new
 |
 +--> Creates empty object {}
 |
 +--> Links prototype
 |
 +--> Sets this
 |
 +--> Returns object
```

---

# 3. Prototypes

Every JavaScript object has access to a prototype.

A prototype allows objects to share methods.

```javascript
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};

const user1 = new User("John");
```

### Memory Efficient

Without Prototype:

```text
user1 -> greet()
user2 -> greet()
user3 -> greet()
```

Three separate copies.

With Prototype:

```text
user1 ----\
user2 -----+-----> Prototype -----> greet()
user3 ----/
```

Only one copy exists.

---

# 4. Classes

Classes are syntactic sugar over prototypes.

They provide cleaner syntax.

```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    greet() {
        console.log(`Hello ${this.username}`);
    }
}
```

Creating objects:

```javascript
const user1 = new User(
    "john",
    "john@gmail.com"
);
```

### Structure

```text
Class
  |
  v
Blueprint
  |
  v
Objects
```

---

# 5. Instances

An instance is an object created from a class or constructor function.

```javascript
const user1 = new User("john");
```

Here:

```text
User -> Class

user1 -> Instance
```

Diagram:

```text
          User Class
               |
      -------------------
      |        |        |
      v        v        v
    user1    user2    user3
```

---

# Understanding `this`

`this` refers to the current object.

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
}
```

When:

```javascript
const user1 = new User("John");
```

Then:

```text
this
 |
 v
user1
```

Result:

```javascript
user1.name = "John";
```

---

# Four Pillars of OOP

```text
OOP
├── Abstraction
├── Encapsulation
├── Inheritance
└── Polymorphism
```

---

# 1. Abstraction

Hide implementation details and expose only essential functionality.

### Example

```javascript
class CoffeeMachine {
    makeCoffee() {
        this.#heatWater();
        console.log("Coffee Ready");
    }

    #heatWater() {
        console.log("Heating Water");
    }
}
```

User only sees:

```javascript
machine.makeCoffee();
```

Not:

```javascript
heatWater();
```

### Diagram

```text
User
 |
 v
makeCoffee()
 |
 +---- Hidden Logic
       |
       +--> Heat Water
       +--> Mix Coffee
       +--> Serve
```

Benefit:

* Simpler interface
* Less complexity

---

# 2. Encapsulation

Wrapping data and methods together and controlling access.

```javascript
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

### Diagram

```text
BankAccount
├── #balance (private)
├── deposit()
└── getBalance()
```

Outside code:

```javascript
account.#balance ❌
```

Allowed:

```javascript
account.getBalance() ✅
```

Benefit:

* Data protection
* Better security

---

# 3. Inheritance

One class can acquire properties and methods from another class.

```javascript
class User {
    login() {
        console.log("Login");
    }
}

class Admin extends User {
    deleteUser() {
        console.log("Delete User");
    }
}
```

### Diagram

```text
        User
          |
          |
          v
        Admin
```

Admin can use:

```javascript
admin.login();
admin.deleteUser();
```

Benefit:

* Code reuse
* Reduced duplication

---

# 4. Polymorphism

Same method name behaves differently depending on the object.

```javascript
class Animal {
    speak() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow");
    }
}
```

### Diagram

```text
          speak()
               |
      ------------------
      |                |
      v                v
    Dog              Cat
    Bark             Meow
```

Usage:

```javascript
const dog = new Dog();
const cat = new Cat();

dog.speak(); // Bark
cat.speak(); // Meow
```

Benefit:

* Flexibility
* Extensible code

---

# Complete OOP Flow in JavaScript

```text
Class / Constructor
          |
          v
      Instance
          |
          v
     Properties
          +
       Methods
          |
          v
     Prototype Chain
          |
          v
     OOP Features
          |
          +--> Abstraction
          +--> Encapsulation
          +--> Inheritance
          +--> Polymorphism
```

# Interview Summary

```text
Object
  |
  v
Object Literal
  |
  v
Constructor Function
  |
  v
Prototype
  |
  v
Class
  |
  v
Instance
```

**OOP Pillars**

```text
Abstraction   -> Hide complexity
Encapsulation -> Protect data
Inheritance   -> Reuse code
Polymorphism  -> Same interface, different behavior
```
