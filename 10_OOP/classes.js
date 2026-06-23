
class User{

    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return this.username.toUpperCase()
    }

}


user1 = new User('shahnawaz','shahnawaz@gmail.com','123')
console.log(user1);

console.log('Encrypted Password : ',user1.encryptPassword())

console.log(user1.changeUsername());






