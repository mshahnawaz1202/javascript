// JavaScript comparison behavior for null and undefined
// Uses ECMAScript rules for ==, ===, and relational operators
// null behaves like 0 in relational comparisons, undefined becomes NaN
// Only null == undefined is true; all other loose comparisons fail

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log(null == undefined);
console.log(null === undefined);

console.log(null > undefined);
console.log(null < undefined);


// ===
console.log('2'==2); // value check
console.log('2' === 2);// value + data type check

