// for of

const arr = [ 1, 2, 3, 4]

for (const val of arr) {
    // console.log(val);
    
    
}

const greetings  = "Hello World!"
for (const greet of greetings) {
    // console.log(greet);
    
}


// maps
// contains unique values

const map = new Map()
map.set('Pak', 'Pakistan') // key value pair
map.set('USA', 'United State of America')
map.set('IN', "India")
map.set('FR', "France")
map.set('Pak', 'Pakistan')

// console.log(map);

/**
 * Output : 
 * 
 * Map(4) {
  'Pak' => 'Pakistan',
  'USA' => 'United State of America',
  'IN' => 'India',
  'FR' => 'France'
}
  no ununique value added
 * 
 */



// for (const key of map) {
//     console.log(key);
    
    
// }


for (const [key,value] of map) {
    console.log(key, ":- ", value);
}

// non iterable on Objects 
const myObj = {
    game1: 'GTA',
    game2: 'Subway Surfers'
}


for (const [key,value] of myObj) {
    console.log(key, ":- ", value);
}







