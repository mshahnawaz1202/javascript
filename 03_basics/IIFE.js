// Immediately Invoke Function Expression (IIFE)


// An IIFE is a function that is defined and executed immediately after it is created.

/*
Syntax

(function () {
    console.log("Hello");
})();

*/
// --------------------------------------------------------------------------------------
(
    function DB()
    {
        console.log("DB Connected!");
        
    }
)(); // semicolon is mandatory to end the execution

// --------------------------------------------------------------------------------------
(
    () => {
        console.log("DB 02 Connected!");
    }
)();

// --------------------------------------------------------------------------------------
(
    function name(name)
    {
        console.log(name);
        
    }
)('shahnawaz'); 
// --------------------------------------------------------------------------------------

const result = (
    function addTwo(n1, n2){
        return (n1 +n2);
    }
)(3,4);

console.log(result);





// Without the first semicolon, JavaScript may treat the second IIFE as a continuation of the first expression and throw an error.



