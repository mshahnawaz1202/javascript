let heros = ['hulk','spiderman']

let heroPower = {
    hulk : 'hammer',
    spiderman: 'sling',
    getSpiderPower:function () {
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}

// we have access to global object and array string functions, all are linked to global objects so anyone can access this function
Object.prototype.shahnawaz = function(){
    console.log('shahnawaz is present in all objects');
    
}

// heroPower.shahnawaz()

// heros.shahnawaz()


// ==================================================================================================================================================================

Array.prototype.heyHero = function(){
    console.log('hero is in array object');
    
}



heros.heyHero()

// heroPower.heyHero()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Inheritance ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const User =  {
    name : 'shahnawaz',
    email : 'shahnawaz@gamil.com'
}

const Teacher = {
    makeLecture : true
}

const TeacherSupport = {
    isAvailable: false
}

const TA  ={
    makeAssignment : 'JS',
    fullTime: true,
    __proto__ : TeacherSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(  TeacherSupport, Teacher)









