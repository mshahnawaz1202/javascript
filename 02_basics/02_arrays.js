const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "batman", "flash"]

console.log(marvel);
console.log(dc);


// marvel.push(dc)
// console.log(marvel);

// console.log(marvel[0]);
// console.log(marvel[1]);
// console.log(marvel[2]);
// console.log(marvel[3]);
// console.log(marvel[3][1]);


// const heros = marvel.concat(dc)
// console.log(heros);

// spread operator

const all_heros = [...marvel, ...dc]
console.log(all_heros);

const arr1 = [1,2,3,[4,5],6,[7,8,[9,11]]]
const real_arr = arr1.flat(Infinity) // flat(depth) => by using infinity it will automatically detects depth
console.log(real_arr);

console.log(Array.isArray('shahnawaz')); // check if array or not
console.log(Array.from('shahnawaz')); // convert string into arrray











