const promiseOne = new Promise(function (resolve, reject) {
    // do async tasks
    // DB call, cryptography, network calls

    setTimeout(function () {
        console.log('Async Task Completed!');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise Consumed!');

})


// ===============================================================================================================================

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async 2 Completed!');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 Resolved!');

})

// ===============================================================================================================================
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'shahnawaz', email: 'shah@example.com' })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);

})

// ===============================================================================================================================

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (error) {
            reject('ERROR : Something Went wrong!')
        }
        else {
            resolve(resolve({ username: 'Promise 4', email: 'promise@example.com' }))
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;

})
.then((username) => {
    console.log(username);

})
.catch(function (error) {
    console.log(error);

})
.finally(() => console.log("The promise is either resolved or rejected"))



// ===============================================================================================================================

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function promiseFiveConsumed() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}
promiseFiveConsumed()

// ===============================================================================================================================

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')


        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// ===============================================================================================================================
fetch('https://api.github.com/users/mshahnawaz1202')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.







