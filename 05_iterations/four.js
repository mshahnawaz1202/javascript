// for in
const myObj = {
    game1: 'GTA',
    game2: 'Subway Surfers',
    game3: 'RC 20'
}
console.log('--------------------------------------------------------------------------------------------------------');
for (const key in myObj) {
    console.log(key);// prints only key
    console.log(myObj[key]);// prints value of that key
    console.log(`${key} :- ${myObj[key]}`);
    
}

console.log('--------------------------------------------------------------------------------------------------------');
const arr = [ 'js', 'cpp', 'java', 'py']
for(const key in arr){
    console.log(key);
    console.log(arr[key]);
    console.log(`${key} :- ${arr[key]}`);
    
}

console.log('--------------------------------------------------------------------------------------------------------');

// not working on maps
const map = new Map()
map.set('Pak', 'Pakistan') // key value pair
map.set('USA', 'United State of America')
map.set('IN', "India")
map.set('FR', "France")
map.set('Pak', 'Pakistan')


for(const key in map){
    console.log(key);
    console.log(map[key]);
    console.log(`${key} :- ${map[key]}`);
}

console.log('--------------------------------------------------------------------------------------------------------');
























