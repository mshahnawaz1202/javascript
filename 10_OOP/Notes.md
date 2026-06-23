# JavaScript Object-Oriented Programming — Complete Learning Package

> A structured mini-course covering every core OOP concept in JavaScript.
> Suitable for interview preparation, revision, and deepening your understanding.

---

## Table of Contents

1. [Object Literal](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#1-object-literal)
2. [Constructor Functions](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#2-constructor-functions)
3. [Prototype](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#3-prototype)
4. [ES6 Classes](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#4-es6-classes)
5. [Instances](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#5-instances)
6. [Inheritance](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#6-inheritance)
7. [Polymorphism](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#7-polymorphism)
8. [Abstraction](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#8-abstraction)
9. [Encapsulation](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#9-encapsulation)
10. [Getters and Setters](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#10-getters-and-setters)
11. [Static Methods and Properties](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#11-static-methods-and-properties)
12. [Mixins](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#12-mixins)
13. [Object Creation Patterns](https://claude.ai/chat/c603d2fe-a9d1-477a-a197-930422f48559#13-object-creation-patterns)

---

## 1. Object Literal

### Definition

An object literal is the simplest way to create a single object in JavaScript. You define the object directly using curly braces `{}`, listing key-value pairs inline. There is no class, no constructor, no blueprint — just a raw object.

### When to Use It

* When you need a one-off, single-use object (configuration, settings, a response payload).
* When you do not need multiple instances of the same shape.
* When grouping related data and behavior together without ceremony.

### Key Characteristics

* Created once, used as-is.
* Properties and methods are defined directly on the object.
* No prototype chain setup is needed manually.
* Not suitable for creating many objects of the same type.

### Advantages

* Simple and concise — no boilerplate.
* Readable — the structure is visible at a glance.
* Perfect for data containers and namespacing.

### Disadvantages

* Cannot be reused as a template for multiple objects.
* If you need 50 user objects, you'd write 50 literals — impractical.
* No concept of inheritance built in.

### ASCII Representation

```
{
  name: "Alice",        <-- property
  age: 30,              <-- property
  greet: function() {}  <-- method
}
```

### Real-World Analogy

Think of an object literal as filling out a paper form by hand. You write the fields once, for one specific person. It is not a template — it is the completed document itself.

### Conceptual Example

```
const config = {
  theme: "dark",
  language: "en",
  maxRetries: 3
};
```

---

## 2. Constructor Functions

### Definition

A constructor function is a regular JavaScript function designed to be called with the `new` keyword. It acts as a blueprint — every time you call it with `new`, JavaScript creates a new object, sets `this` to that object, and returns it automatically.

### When to Use It

* When you need to create multiple objects with the same structure and behavior.
* In older codebases (pre-ES6) or when you want fine-grained control over the prototype chain.
* When you understand the prototype mechanism and want to work close to it.

### Key Characteristics

* By convention, constructor function names are capitalized (e.g., `Person`, `Car`).
* Uses `this` to assign properties.
* Methods are typically added to the prototype (not inside the constructor) for memory efficiency.
* The `new` keyword triggers four automatic steps.

### The `new` Keyword — Four Steps

```
Step 1: A new empty object is created         {}
Step 2: `this` is bound to that new object    this = {}
Step 3: The constructor body executes         this.name = "Alice"
Step 4: The new object is returned            return this  (implicit)
```

### Advantages

* Reusable blueprint for many objects.
* More control than ES6 classes (which are syntactic sugar over this).
* Works in all JavaScript environments.

### Disadvantages

* Forgetting `new` causes silent bugs (this becomes global or undefined in strict mode).
* Methods defined inside the constructor are duplicated per instance (wasteful).
* Syntax is less intuitive than classes for beginners.

### Real-World Analogy

A constructor function is like a car factory mold. The mold (constructor) defines the shape. Every time you pour in material (call with `new`), you get a new car (object) with the same structure but its own identity.

### Conceptual Example

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() { ... };

const alice = new Person("Alice", 30);
const bob   = new Person("Bob", 25);
```

---

## 3. Prototype

### Definition

Every JavaScript object has an internal link to another object called its  **prototype** . When you access a property or method on an object, JavaScript first looks on the object itself. If it does not find it there, it walks up the **prototype chain** until it finds it or reaches `null`.

### When to Use It

* When you want all instances of a constructor to share methods without duplicating them in memory.
* When implementing inheritance manually.
* When optimizing memory — shared methods on the prototype are stored once.

### Key Characteristics

* Every function has a `.prototype` property (an object).
* Every object created with `new Constructor()` has its `__proto__` pointing to `Constructor.prototype`.
* The chain ends at `Object.prototype`, whose `__proto__` is `null`.
* Method lookup travels the chain automatically.

### Prototype Chain Diagram

```
alice (instance)
  |
  |-- name: "Alice"
  |-- age: 30
  |
  __proto__ --> Person.prototype
                  |
                  |-- greet: function() {}
                  |
                  __proto__ --> Object.prototype
                                  |
                                  |-- toString: function() {}
                                  |-- hasOwnProperty: function() {}
                                  |
                                  __proto__ --> null
```

### Advantages

* Methods defined on the prototype are shared across all instances — significant memory savings.
* Enables JavaScript's native inheritance model.

### Disadvantages

* Can be confusing to reason about, especially with deep chains.
* Direct mutation of built-in prototypes (e.g., `Array.prototype`) is dangerous and discouraged.

### Real-World Analogy

Prototype is like a company handbook. Every employee (instance) does not carry their own copy. Instead, they all refer to the same handbook (prototype). If a rule is not on an individual employee's desk, they look it up in the shared handbook.

### Conceptual Example

```
function Dog(name) {
  this.name = name;
}

// Defined once, shared by all Dog instances
Dog.prototype.bark = function() { ... };

const d1 = new Dog("Rex");   // d1.bark exists via prototype
const d2 = new Dog("Buddy"); // d2.bark is the same function reference
```

---

## 4. ES6 Classes

### Definition

ES6 Classes are **syntactic sugar** over JavaScript's prototype-based inheritance. They do not introduce a new object model — they provide a cleaner, more familiar syntax for creating constructor functions and setting up prototypes.

### When to Use It

* In modern JavaScript (ES6+) whenever you need OOP structure.
* When working with frameworks like React (class components), Node.js services, or any codebase that benefits from readable, structured code.
* Preferred over constructor functions for readability and maintainability.

### Key Characteristics

* Defined with the `class` keyword.
* The `constructor` method runs when `new` is called.
* Methods defined in the class body are placed on the prototype automatically.
* Classes are NOT hoisted (unlike function declarations).
* Classes run in strict mode by default.

### Class Anatomy

```
class Person {
  constructor(name, age) { ... }   <-- runs on new Person()
  greet() { ... }                  <-- placed on Person.prototype
  static describe() { ... }        <-- placed on Person itself, not prototype
}
```

### Advantages

* Clean, readable syntax that developers from other languages recognize.
* Built-in support for `extends` and `super` (inheritance).
* Static methods and getters/setters integrate naturally.
* Strict mode by default prevents common mistakes.

### Disadvantages

* Still prototype-based underneath — misunderstanding this causes confusion.
* Not hoisted — must be declared before use.
* `private` fields (using `#`) are newer and not supported in very old environments.

### Real-World Analogy

An ES6 class is like an architectural blueprint for a house. The blueprint (class) defines the rooms and layout. Each house built from it (instance) is independent, but all follow the same plan.

### Conceptual Example

```
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  describe() {
    return `${this.make} ${this.model}`;
  }
}

const car = new Vehicle("Toyota", "Corolla");
```

---

## 5. Instances

### Definition

An **instance** is a concrete object created from a class or constructor function. The class is the template; the instance is the actual object that lives in memory with its own property values.

### When to Use It

* Every time you call `new ClassName()`, you create a new instance.
* Instances hold their own data while sharing behavior through the prototype.

### Key Characteristics

* Each instance has its own copy of the properties defined in the constructor.
* Each instance shares methods from the prototype (not duplicated).
* `instanceof` operator checks if an object is an instance of a given class.

### Instance vs Class

```
Class (blueprint)          Instance (real object)
-----------------          ----------------------
Person                     const alice = new Person("Alice", 30)
  - name (template)          - name: "Alice"
  - age (template)           - age: 30
  - greet() (shared)         - greet --> via prototype
```

### Advantages

* You can create unlimited independent objects from a single class.
* Each instance is isolated — changing one does not affect others (for primitive properties).

### Disadvantages

* Reference-type properties (arrays, objects) inside a constructor are shared if not handled carefully.

### Real-World Analogy

A class is a cookie cutter. Each instance is a cookie pressed out of it. They have the same shape, but each cookie is a separate, independent object you can frost differently.

### Conceptual Example

```
class User {
  constructor(username) {
    this.username = username;
  }
}

const u1 = new User("alice");
const u2 = new User("bob");

u1 instanceof User; // true
u1 === u2;          // false — separate instances
```

---

## 6. Inheritance

### Definition

Inheritance allows one class (the **child** or  **subclass** ) to acquire the properties and methods of another class (the **parent** or  **superclass** ). This promotes code reuse — common behavior is defined once in the parent and automatically available in all children.

### When to Use It

* When multiple entities share a common base of behavior.
* When you want to model an "is-a" relationship (a Dog IS-A Animal).
* When you want to extend existing functionality without modifying the original class.

### Key Characteristics

* Uses the `extends` keyword.
* The child class must call `super()` in its constructor before accessing `this`.
* `super` can also call parent methods: `super.methodName()`.
* JavaScript supports single inheritance (one parent only) for classes.

### Inheritance Diagram

```
        Animal
       /      \
     Dog      Cat
    /   \
 Puppy  Adult

Animal defines: eat(), sleep()
Dog extends Animal, adds: bark()
Puppy extends Dog, adds: play()
```

### Advantages

* Eliminates code duplication.
* Changes in the parent propagate to all children.
* Models real-world hierarchies naturally.

### Disadvantages

* Deep inheritance chains become hard to reason about ("inheritance hell").
* Tight coupling — a change in the parent can break all children.
* "Composition over inheritance" is often a better approach for complex systems.

### Real-World Analogy

A smartphone is a type of mobile phone, which is a type of electronic device. "Smartphone" inherits all properties of "electronic device" (needs power, has a screen) and adds its own (touchscreen, apps).

### Conceptual Example

```
class Animal {
  constructor(name) { this.name = name; }
  eat() { ... }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);         // calls Animal's constructor
    this.breed = breed;
  }
  bark() { ... }
}

const d = new Dog("Rex", "Labrador");
d.eat();  // inherited from Animal
d.bark(); // defined on Dog
```

---

## 7. Polymorphism

### Definition

Polymorphism means "many forms." In OOP, it is the ability of different classes to define the **same method name** but with  **different implementations** . The correct version is called based on the actual object type at runtime.

### When to Use It

* When different subclasses share the same interface but behave differently.
* When you want to write code that works with objects of different types uniformly.
* Useful in rendering systems, payment processors, notification systems.

### Key Characteristics

* Achieved through **method overriding** — a child class redefines a parent's method.
* JavaScript resolves which method to run based on the object's type at call time.
* You can still call the parent's version using `super.methodName()`.

### Polymorphism Flow

```
shape.draw()
    |
    +--> if shape is Circle  --> Circle.draw()   draws a circle
    +--> if shape is Square  --> Square.draw()   draws a square
    +--> if shape is Triangle-> Triangle.draw()  draws a triangle

Same method name, different behavior per type.
```

### Advantages

* Write one interface, work with many types — reduces conditional branching.
* Easily extensible — add new subclasses without changing existing code.
* Foundation of the Open/Closed Principle (open for extension, closed for modification).

### Disadvantages

* If overriding is not carefully managed, behavior can become unpredictable.
* Overuse leads to fragile hierarchies.

### Real-World Analogy

Every employee has a `calculateBonus()` method. A Manager's bonus is 20% of salary. A Developer's bonus is 15%. A Salesperson's is based on commission. You call the same method name on any employee and get the correct result for their role.

### Conceptual Example

```
class Shape {
  area() { return 0; }
}

class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r ** 2; }  // overrides parent
}

class Rectangle extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
  area() { return this.w * this.h; }         // overrides parent
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(s => console.log(s.area())); // each calls its own version
```

---

## 8. Abstraction

### Definition

Abstraction means **hiding the internal complexity** of a system and exposing only what is necessary. Users of a class should interact with a clean, simple interface without needing to understand the implementation details.

### When to Use It

* When a class has complex internals that consumers do not need to know about.
* When designing APIs, SDKs, or service layers.
* When you want to hide implementation details that may change without affecting callers.

### Key Characteristics

* JavaScript does not have built-in `abstract` classes (unlike Java/C#), but the pattern is enforced by convention or by throwing errors in methods meant to be overridden.
* Private fields (`#field`) introduced in ES2022 help enforce abstraction.
* The interface (what methods are exposed) is stable; the implementation can change freely.

### Abstraction Layers

```
USER CODE
    |
    v
 Public API:     connect(), sendMessage(), disconnect()
    |
    (hidden)
    v
 Internal:       _openSocket(), _authenticate(), _handleRetry(), _compress()
```

### Advantages

* Reduces complexity for the consumer of a class.
* Implementation can change without breaking caller code.
* Promotes separation of concerns.

### Disadvantages

* Requires discipline — JavaScript does not enforce it at the language level (without private fields).
* Over-abstraction can make a system hard to understand or debug.

### Real-World Analogy

When you drive a car, you use the steering wheel, pedals, and gear shift — the public interface. You do not need to understand how the fuel injection system, transmission, or engine timing work. The car abstracts that complexity away.

### Conceptual Example

```
class DatabaseService {
  // Public interface — all the user needs to know
  connect() { ... }
  query(sql) { ... }
  disconnect() { ... }

  // Internal — hidden from the consumer
  _validateConnection() { ... }
  _retry() { ... }
  _pool() { ... }
}
```

---

## 9. Encapsulation

### Definition

Encapsulation is the practice of **bundling data (properties) and behavior (methods) together** in a single unit (object or class), and **restricting direct access** to the internal data. External code interacts only through a controlled interface.

### When to Use It

* When you want to protect the internal state of an object from accidental or unauthorized modification.
* When internal data has invariants that must be maintained (e.g., age must be positive).
* In any class with sensitive or complex internal state.

### Key Characteristics

* Private fields use the `#` prefix in modern JavaScript (ES2022+).
* Conventionally, `_property` (underscore prefix) signals "treat as private" in older code.
* Data is exposed and modified only through public methods (getters/setters or named methods).
* Prevents invalid states by centralizing validation.

### Encapsulation Diagram

```
+------------------------------------+
|           BankAccount              |
|------------------------------------|
| PRIVATE:  #balance = 0             |
|           #transactionLog = []     |
|------------------------------------|
| PUBLIC:   deposit(amount)          |
|           withdraw(amount)         |
|           getBalance()             |
+------------------------------------+
         ^
         |
  External code can ONLY use the public methods.
  Direct access to #balance is blocked.
```

### Advantages

* Prevents external code from putting an object in an invalid state.
* Internal implementation can change without affecting external code.
* Makes objects self-contained and easier to test.

### Disadvantages

* Requires extra code (accessor methods) for every piece of data you want to expose.
* JavaScript's enforcement (via `#`) is relatively recent; older patterns rely on convention.

### Real-World Analogy

A capsule (medicine pill) bundles its contents together and controls how they are released. You cannot reach in and rearrange the chemicals. You take it as intended. The pill is the encapsulated unit; the dosage instructions are the public interface.

### Conceptual Example

```
class BankAccount {
  #balance = 0;  // private — cannot be accessed directly outside

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) this.#balance -= amount;
    else throw new Error("Insufficient funds");
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
account.#balance;  // SyntaxError — private field
```

---

## 10. Getters and Setters

### Definition

Getters and setters are special methods that allow you to **intercept the reading and writing** of a property. They look like regular property accesses from the outside (`obj.name`) but actually run a function when called.

### When to Use It

* When you want to add validation logic when a property is set.
* When you want to compute a value dynamically when a property is read.
* When you want to maintain a clean public API while controlling internal state.

### Key Characteristics

* Defined with the `get` and `set` keywords inside a class or object literal.
* Accessed like a property (`obj.name`), not called like a method (`obj.name()`).
* `get` must return a value; `set` receives one argument (the new value).
* Can be combined with private fields for full encapsulation.

### Getter / Setter Flow

```
READING:  user.fullName
              |
              v
          get fullName() { return this.#first + " " + this.#last; }
              |
              v
          Returns computed value without storing it separately

WRITING:  user.age = -5
              |
              v
          set age(value) { if (value < 0) throw Error; this.#age = value; }
              |
              v
          Validates before storing
```

### Advantages

* Clean syntax — consumers use `obj.property` syntax, unaware of the logic.
* Computed properties are recalculated each time (always fresh).
* Validation is centralized in the setter.

### Disadvantages

* Can be confusing — accessing a property silently runs a function, which may have unexpected performance implications.
* Over-using getters for complex computations without caching can be slow.

### Real-World Analogy

A digital thermometer display is a getter. You look at the display (read the property) and it computes the current temperature. You do not set the display directly — you change the environment (the setter/underlying state) and the display updates.

### Conceptual Example

```
class Temperature {
  #celsius;

  constructor(celsius) { this.#celsius = celsius; }

  get fahrenheit() {
    return (this.#celsius * 9/5) + 32;   // computed on read
  }

  set celsius(value) {
    if (value < -273.15) throw new Error("Below absolute zero");
    this.#celsius = value;
  }
}

const t = new Temperature(100);
t.fahrenheit;    // 212 — computed, not stored
t.celsius = 0;   // validated before stored
```

---

## 11. Static Methods and Properties

### Definition

Static methods and properties belong to the  **class itself** , not to any instance. They are called on the class directly (`ClassName.method()`), not on objects created from the class (`instance.method()`).

### When to Use It

* Utility or helper functions that do not depend on instance data.
* Factory methods that create instances (e.g., `User.fromJSON(data)`).
* Shared counters or configuration that belongs to the class, not individual instances.
* Caching, registries, or pools managed at the class level.

### Key Characteristics

* Defined with the `static` keyword.
* Not accessible on instances — only on the class.
* `this` inside a static method refers to the class itself.
* Static properties (class fields with `static`) are shared across the class.

### Static vs Instance

```
class MathHelper {
  static PI = 3.14159;            // on the class, not instances

  static square(n) { ... }        // called as MathHelper.square(5)

  describe() { ... }              // called as instance.describe()
}

MathHelper.PI;          // works
MathHelper.square(5);   // works

const m = new MathHelper();
m.PI;                   // undefined — not on instance
m.square(5);            // TypeError — not on instance
```

### Advantages

* Clearly signals that a method does not depend on instance state.
* Useful for namespacing utility functions under a class.
* Static factories (`User.fromToken()`) provide named constructors.

### Disadvantages

* Cannot access instance properties from a static method.
* Overuse can lead to classes becoming bags of unrelated functions (utility class anti-pattern).

### Real-World Analogy

A factory has production lines (instances) and factory-wide management rules (static). The production count for the entire factory is a static property. A method to "count all units produced" is a static method — it belongs to the factory, not to any individual line.

### Conceptual Example

```
class User {
  static #count = 0;

  constructor(name) {
    this.name = name;
    User.#count++;
  }

  static getCount() {
    return User.#count;     // reports how many users exist
  }

  static fromJSON(json) {
    const data = JSON.parse(json);
    return new User(data.name);  // factory method
  }
}

User.getCount();           // 0
new User("Alice");
User.getCount();           // 1
```

---

## 12. Mixins

### Definition

A mixin is a pattern for **composing objects from multiple sources of behavior** without using inheritance. Since JavaScript classes support only single inheritance, mixins allow you to "mix in" reusable methods from multiple sources.

### When to Use It

* When multiple unrelated classes need the same capability (e.g., serialization, logging, event handling).
* When inheritance would create an awkward or incorrect "is-a" relationship.
* When you prefer **composition over inheritance** for flexibility.

### Key Characteristics

* Typically implemented as plain objects or functions that copy methods onto a target class or its prototype.
* The most common pattern: a function that takes a superclass and returns an extended class.
* No standard mixin syntax in JavaScript — it is a design pattern, not a language feature.
* Methods from the mixin are copied, not inherited via the chain.

### Mixin Diagram

```
SerializableMixin        LoggableMixin
  - serialize()            - log()
  - deserialize()          - warn()
       \                      /
        \                    /
         v                  v
           class Order (mixes in both)
             - serialize()    <-- from SerializableMixin
             - log()          <-- from LoggableMixin
             - place()        <-- own method
```

### Advantages

* Compose behavior from multiple sources without deep inheritance.
* Reusable across unrelated class hierarchies.
* Encourages small, focused units of behavior.

### Disadvantages

* No formal mechanism — it is a convention, not enforced by the language.
* Method name collisions between mixins require careful management.
* Debugging can be harder since the source of a method is not immediately obvious.

### Real-World Analogy

A Swiss Army knife is not a "type" of fork or a "type" of screwdriver — it composes multiple tools into one. Similarly, a class can mix in Serializable, Loggable, and EventEmitter behavior without being a "type" of any of them.

### Conceptual Example

```
const Serializable = {
  serialize() { return JSON.stringify(this); },
  deserialize(data) { return JSON.parse(data); }
};

const Loggable = {
  log(msg) { console.log(`[LOG] ${msg}`); }
};

class Order {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }
}

// Mix in the behaviors
Object.assign(Order.prototype, Serializable, Loggable);

const o = new Order(1, "Book");
o.serialize(); // from Serializable
o.log("Order placed"); // from Loggable
```

---

## 13. Object Creation Patterns

---

### 13a. Factory Pattern

#### Definition

A factory is a function or method that creates and returns objects without requiring the caller to use `new`. It encapsulates the creation logic and can return different types of objects based on input.

#### When to Use It

* When you want to hide the creation details from the consumer.
* When the object type to create depends on runtime conditions.
* When you want to return objects without exposing their constructors.

#### Key Characteristics

* No `new` required from the consumer.
* The factory function handles all object creation logic.
* Can return different object types based on parameters.
* Objects created do not share a prototype (unless you set it up manually).

#### Factory Pattern Diagram

```
createAnimal("dog")  -->  { name, bark: fn }
createAnimal("cat")  -->  { name, meow: fn }
createAnimal("bird") -->  { name, chirp: fn }

The factory decides which shape to return.
```

#### Advantages

* Hides implementation details from callers.
* Flexible — can return any object shape or type.
* Avoids the risk of forgetting `new`.

#### Disadvantages

* Objects created by a plain factory do not share a prototype — no `instanceof` check.
* Slightly more memory usage if methods are not shared.

#### Real-World Analogy

A car dealership is a factory. You tell them what you want (sedan, SUV, truck) and they return the right vehicle. You do not go into the factory floor and build it yourself.

#### Conceptual Example

```
function createUser(name, role) {
  const user = { name };

  if (role === "admin") {
    user.permissions = ["read", "write", "delete"];
  } else {
    user.permissions = ["read"];
  }

  return user;  // no 'new' required from caller
}

const admin = createUser("Alice", "admin");
const guest = createUser("Bob", "guest");
```

---

### 13b. Singleton Pattern

#### Definition

The Singleton pattern ensures that a class has **only one instance** throughout the application's lifetime. Every time you request an instance, the same one is returned.

#### When to Use It

* Configuration managers, database connection pools, logging services.
* Any resource that is expensive to create and should be shared globally.
* When having multiple instances would cause inconsistency (e.g., two conflicting configurations).

#### Key Characteristics

* The single instance is stored internally.
* A static method (e.g., `getInstance()`) is used to access it.
* The constructor is either private (enforced by convention in JS) or guarded.
* In JavaScript, a simple module-level exported object is naturally a singleton.

#### Singleton Diagram

```
First call:   Config.getInstance()  -->  creates instance, stores it
Second call:  Config.getInstance()  -->  returns the SAME instance
Third call:   Config.getInstance()  -->  returns the SAME instance

Only one Config object ever exists in memory.
```

#### Advantages

* Controlled access to a shared resource.
* Reduces memory overhead for objects that need only one copy.
* Consistent state across the application.

#### Disadvantages

* Introduces global state — makes testing harder (tests can affect each other).
* Tight coupling — code that depends on a singleton is hard to isolate.
* Can hide dependencies, making the code less transparent.

#### Real-World Analogy

A country has one central bank. No matter where you interact with it, it is always the same institution managing the same reserves. You do not create a new central bank each time you need one.

#### Conceptual Example

```
class Config {
  static #instance = null;

  #settings = { theme: "dark", lang: "en" };

  static getInstance() {
    if (!Config.#instance) {
      Config.#instance = new Config();  // created only once
    }
    return Config.#instance;
  }

  get(key) { return this.#settings[key]; }
  set(key, value) { this.#settings[key] = value; }
}

const c1 = Config.getInstance();
const c2 = Config.getInstance();

c1 === c2;  // true — same object
```

---

## Summary Reference Table

| Concept              | Key Keyword(s)               | Core Purpose                             |
| -------------------- | ---------------------------- | ---------------------------------------- |
| Object Literal       | `{}`                       | One-off object creation                  |
| Constructor Function | `function`,`new`         | Blueprint via function + new             |
| Prototype            | `.prototype`,`__proto__` | Shared method lookup chain               |
| ES6 Class            | `class`,`constructor`    | Clean syntax for OOP                     |
| Instance             | `new`                      | Concrete object from a class             |
| Inheritance          | `extends`,`super`        | Child acquires parent behavior           |
| Polymorphism         | method overriding            | Same interface, different behavior       |
| Abstraction          | convention,`#private`      | Hide complexity, expose interface        |
| Encapsulation        | `#`,`_`, accessors       | Bundle + protect internal state          |
| Getters / Setters    | `get`,`set`              | Intercept property read/write            |
| Static               | `static`                   | Class-level methods and properties       |
| Mixins               | `Object.assign`            | Compose behavior from multiple sources   |
| Factory Pattern      | function returning object    | Flexible object creation without `new` |
| Singleton Pattern    | static instance guard        | Ensure only one instance exists          |

---

## Interview Quick-Reference

**Q: What is the difference between a class and an instance?**
A class is the template (blueprint). An instance is the actual object created from it using `new`.

**Q: What does the prototype chain mean?**
When a property is not found on an object, JavaScript looks up the chain through `__proto__` references until it reaches `null`.

**Q: What is the difference between encapsulation and abstraction?**
Encapsulation is about bundling data and restricting access. Abstraction is about hiding implementation complexity behind a clean interface. They often work together.

**Q: Why use static methods?**
When the functionality belongs to the class concept itself, not to any instance — utility helpers, factories, counters.

**Q: When should you prefer composition (mixins) over inheritance?**
When the "is-a" relationship does not hold, or when you need to combine behaviors from multiple sources. Deep inheritance creates fragile, tightly coupled hierarchies.

**Q: What is the Singleton pattern used for?**
Shared, global resources that should have exactly one instance — config, logging, DB connection pools.

---

*End of JavaScript OOP Learning Package — README*
