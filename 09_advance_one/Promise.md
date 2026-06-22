# JavaScript Promise

## Definition

A **Promise** is an object that represents the eventual result of an asynchronous operation.

---

## Promise Lifecycle

```text
                Promise Created
                       |
                       v
                  [ PENDING ]
                       |
          +------------+------------+
          |                         |
          v                         v
     resolve()                 reject()
          |                         |
          v                         v
    [ FULFILLED ]             [ REJECTED ]
```

### States

| State     | Description                      |
| --------- | -------------------------------- |
| Pending   | Operation is still in progress   |
| Fulfilled | Operation completed successfully |
| Rejected  | Operation failed                 |

---

## Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data received");
    } else {
        reject("Something went wrong");
    }
});
```

---

## Consuming a Promise

```javascript
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```

### Flow

```text
      Promise
         |
         v
      .then()
         |
   Success Result
         |
         v
      Output
```

### Error Flow

```text
      Promise
         |
         v
      .catch()
         |
        Error
         |
         v
      Output
```

---

## Promise Chaining

```javascript
Promise.resolve(5)
    .then(x => x * 2)
    .then(x => x + 10)
    .then(console.log);
```

### Execution Flow

```text
   5
   |
   v
 [x * 2]
   |
  10
   |
   v
 [x + 10]
   |
  20
   |
   v
 console.log()
```

### Output

```text
20
```

---

## Real-World Example: Fetch API

```javascript
fetch("/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Request Flow

```text
      Browser
         |
         v
      fetch()
         |
         v
   HTTP Request
         |
         v
      Server
         |
         v
   HTTP Response
         |
         v
   response.json()
         |
         v
       Data
         |
         v
    .then(data)
```

---

## Async/Await

### Promise Style

```javascript
getUser()
    .then(user => {
        console.log(user);
    });
```

### Async/Await Style

```javascript
const user = await getUser();
console.log(user);
```

### Flow

```text
          Promise
             |
             v
        await waits
             |
             v
      Result Available
             |
             v
      Continue Execution
```

---

## Promise.all()

```javascript
Promise.all([
    p1,
    p2,
    p3
]).then(results => {
    console.log(results);
});
```

### Flow

```text
 p1 ----\
 p2 -----+-----> Promise.all -----> Result Array
 p3 ----/

 All promises must succeed
```

### Result

```text
["A", "B", "C"]
```

---

## Promise.race()

```javascript
Promise.race([
    p1,
    p2,
    p3
]);
```

### Flow

```text
 p1 (1 sec) ----\
 p2 (3 sec) -----+-----> First completed wins
 p3 (2 sec) ----/
```

### Result

```text
Value from p1
```

---

## Promise.allSettled()

```javascript
Promise.allSettled([
    p1,
    p2,
    p3
]);
```

### Flow

```text
 p1 ----\
 p2 -----+-----> Wait for ALL
 p3 ----/

 Successes and failures are both returned
```

### Example Result

```javascript
[
  { status: "fulfilled", value: "A" },
  { status: "rejected", reason: "Error" }
]
```

---

## Promise.any()

```javascript
Promise.any([
    p1,
    p2,
    p3
]);
```

### Flow

```text
 p1 (reject) ---\
 p2 (resolve) ---+-----> First successful promise wins
 p3 (resolve) ---/
```

---

## Quick Comparison

| Method               | Waits For               | Fails If                |
| -------------------- | ----------------------- | ----------------------- |
| Promise.all()        | All promises            | Any promise fails       |
| Promise.race()       | First settled promise   | Depends on first result |
| Promise.allSettled() | All promises            | Never fails             |
| Promise.any()        | First fulfilled promise | All promises fail       |

---

## Interview Definition

> A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

```text
PENDING
   |
   +-----> FULFILLED
   |
   +-----> REJECTED
```

Promises help manage asynchronous code using:

* `.then()`
* `.catch()`
* `.finally()`
* `async/await`
