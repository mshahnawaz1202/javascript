

function setUserName(username){
    this.username = username
    console.log(username);
    
}

function createUser(username, email, password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}


const shah = new createUser('shahnawaz','shah@gamil.com','123abc')
console.log(shah);














