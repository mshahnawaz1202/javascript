// =======================================
// STATIC METHODS IN JAVASCRIPT
// =======================================

/*
  What is a static method?
  - A method defined on the class itself
  - Not available on instances (objects)
  - Called using ClassName.method()
  - Used for utility, helper, or factory logic
*/

class MathUtils {
  // ===================================
  // STATIC METHODS (Class level)
  // ===================================

  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }

  // ===================================
  // INSTANCE METHOD (Object level)
  // ===================================

  subtract(a, b) {
    return a - b;
  }
}

// =======================================
// USING STATIC METHODS
// =======================================

console.log(MathUtils.add(10, 5));        // 15
console.log(MathUtils.multiply(4, 3));     // 12
console.log(MathUtils.divide(20, 4));      // 5

// =======================================
// USING INSTANCE METHOD
// =======================================

const math = new MathUtils();

console.log(math.subtract(20, 7));         // 13

// =======================================
// INCORRECT USAGE (IMPORTANT)
// =======================================

// This will throw an error because static methods
// are not available on instances
// console.log(math.add(2, 3));

// =======================================
// REAL-WORLD EXAMPLE: FACTORY METHODS
// =======================================

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  // Static factory method
  static createAdmin() {
    return new User("Admin", "admin");
  }

  static createGuest() {
    return new User("Guest", "guest");
  }

  // Instance method
  getInfo() {
    return `${this.name} is a ${this.role}`;
  }
}

// Using static methods to create objects
const admin = User.createAdmin();
const guest = User.createGuest();

console.log(admin.getInfo());  // Admin is a admin
console.log(guest.getInfo());  // Guest is a guest

// =======================================
// KEY POINTS
// =======================================

/*
1. Static methods belong to the class, not objects
2. They are called using ClassName.method()
3. They cannot access instance properties (this)
4. They are used for utility or factory logic
5. Instance methods require objects created with new
*/