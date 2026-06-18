const arr = [1, 2, 3, 4, "shahnawaz", true]

console.log('==================== INITIAL ARRAY ====================');
console.log('Original : ', arr);
console.log('Length   : ', arr.length);

arr.push(7) // add elements at end
arr.push(11)

console.log('\n==================== AFTER PUSH ====================');
console.log('Original : ', arr);
console.log('Length   : ', arr.length);

arr.unshift("shah") // add at start

console.log('\n==================== AFTER UNSHIFT ====================');
console.log('Original : ', arr);
console.log('Length   : ', arr.length);

arr.pop() // remove from end

console.log('\n==================== AFTER POP ====================');
console.log('Original : ', arr);
console.log('Length   : ', arr.length);

arr.shift() // remove from start

console.log('\n==================== AFTER SHIFT ====================');
console.log('Original : ', arr);

console.log('\n==================== ARRAY CHECKS ====================');
console.log('Includes 3 : ', arr.includes(3));
console.log('IndexOf 4  : ', arr.indexOf(4));

console.log('\n==================== ARRAY CONVERSIONS ====================');
console.log('toString : ', arr.toString());
console.log('join(-)  : ', arr.join('-'));

console.log('\n=======================================================');

// slice(start, end) => array remains same (in slicing end index is not included)
console.log('\n==================== SLICE OPERATION ====================');
console.log('Original Array : ', arr);

const subArr = arr.slice(1, 4)

console.log('Sub Array      : ', subArr);

console.log('\n=======================================================');

// splice(start, count) => array not same ( start from this index and count represents how many)
console.log('\n==================== SPLICE OPERATION ====================');
const removed = arr.splice(1, 2)

console.log('Original Array : ', arr);
console.log('Removed Items  : ', removed);

console.log('\n=======================================================');