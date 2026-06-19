// ++++++++++++++++++++++++++++++++++++++++++++++++ CallBack Functions ++++++++++++++++++++++++++++++++++++++++++++
// A callback function is a function that is passed as an argument to another function and is executed later.

const arr = [ 'js', 'cpp', 'java', 'py']


arr.forEach( function (val){
    console.log(val);
    
} )
console.log('-----------------------------------------------------------------');

arr.forEach( (val) =>{
    console.log(val);
    
} )
console.log('-----------------------------------------------------------------');
function printMe(item){
    console.log(item);
    
}

arr.forEach(printMe)

console.log('-----------------------------------------------------------------');

function printArr(item, index, arr){
    console.log(item," :- ", index, " => ",arr);
    
}

arr.forEach(printArr)

console.log('-----------------------------------------------------------------');

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

console.log('-----------------------------------------------------------------');








