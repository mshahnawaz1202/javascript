# JavaScript Fetch API

## What is `fetch()`?

`fetch()` is a built-in JavaScript function used to make HTTP requests to servers.

It returns a **Promise** that resolves to a `Response` object.

```javascript
fetch(url)
```

---

# Basic Flow

```text
  Client (Browser)
         |
         | HTTP Request
         v
      Server
         |
         | HTTP Response
         v
      Response
         |
         v
    response.json()
         |
         v
       Data
```

---

# Simple GET Request

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

# Execution Flow

```text
fetch()
   |
   v
Promise<Response>
   |
   v
.then(response)
   |
   v
response.json()
   |
   v
Promise<Data>
   |
   v
.then(data)
   |
   v
Use Data
```

---

# Understanding the Response Object

```javascript
fetch(url)
    .then(response => {
        console.log(response);
    });
```

Response contains:

```text
Response
├── status
├── statusText
├── headers
├── ok
├── json()
├── text()
└── blob()
```

Example:

```javascript
fetch(url)
    .then(response => {
        console.log(response.status);
        console.log(response.ok);
    });
```

---

# Why `response.json()`?

The server sends JSON as text.

```text
Server Response

"{ \"name\": \"John\" }"
```

Convert it to JavaScript object:

```javascript
response.json()
```

Result:

```javascript
{
    name: "John"
}
```

Flow:

```text
Response
   |
   v
response.json()
   |
   v
JavaScript Object
```

---

# Using Async/Await

## Promise Version

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

## Async/Await Version

```javascript
async function getUser() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}
```

Flow:

```text
await fetch()
      |
      v
 Response
      |
      v
await response.json()
      |
      v
   Data
```

---

# Error Handling

```javascript
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

Flow:

```text
Request
   |
   v
Response Received
   |
   +---- status OK -------> Parse JSON
   |
   +---- status Error ----> throw Error
                                   |
                                   v
                               catch()
```

---

# POST Request

Send data to server.

```javascript
fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "John",
        age: 25
    })
});
```

Flow:

```text
JavaScript Object
       |
       v
JSON.stringify()
       |
       v
JSON String
       |
       v
HTTP Request Body
       |
       v
Server
```

---

# Complete POST Example

```javascript
async function createUser() {
    const response = await fetch(
        "https://api.example.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "John"
            })
        }
    );

    const data = await response.json();

    console.log(data);
}
```

---

# Request Lifecycle

```text
 ┌──────────┐
 │ fetch()  │
 └────┬─────┘
      |
      v
 ┌──────────┐
 │ Request  │
 └────┬─────┘
      |
      v
 ┌──────────┐
 │ Server   │
 └────┬─────┘
      |
      v
 ┌──────────┐
 │ Response │
 └────┬─────┘
      |
      v
 ┌──────────┐
 │  JSON    │
 └────┬─────┘
      |
      v
 ┌──────────┐
 │   Data   │
 └──────────┘
```

---

# Common HTTP Methods

| Method | Purpose      |
| ------ | ------------ |
| GET    | Read data    |
| POST   | Create data  |
| PUT    | Replace data |
| PATCH  | Update data  |
| DELETE | Remove data  |

---

# Interview Answer

> `fetch()` is a browser API used to make HTTP requests. It returns a Promise that resolves to a Response object. The response is typically converted to JSON using `response.json()`, after which the data can be processed using `.then()` or `async/await`.

```text
fetch()
   |
   v
Promise<Response>
   |
   v
response.json()
   |
   v
Promise<Data>
   |
   v
Application Data
```
