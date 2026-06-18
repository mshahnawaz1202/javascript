// let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

// console.log(myDate.toTimeString());
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getTime());
// console.log(typeof myDate);

const newDate = new Date(2006, 1, 12); // month start from 0 to 11
console.log(newDate.toDateString());

// const timeStamp  = Date.now()
// console.log(timeStamp);

// console.log(newDate.getTime());

// console.log(Math.floor(Date.now()/1000));

console.log(newDate.toLocaleString("default", { weekday: "long" }));

// console.log(newDate.toLocaleString('default',{calendar:}));
