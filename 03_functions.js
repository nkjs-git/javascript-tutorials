// function declarations
// Features are: 
// Hoisting: Function declarations are hoisted to the top of their scope. This means you can call mulFun before it’s actually defined in the code.
// this Binding: Function declarations have their own this context, which can change depending on how the function is called (e.g., called as a method of an object, as a standalone function, etc.).
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}


// arrow function expressions
// Features are:
// Hoisting: Arrow functions are not hoisted in the same way as function declarations. They are treated as variables, so they must be declared before use.
// this Binding: Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical scope (the environment in which they’re defined). This makes them particularly useful for maintaining this in callback functions and event handlers
const modFun = (num1,num2) => {
    return num1%num2
}

res=multiply(9,3)
console.log(res)

console.log(modFun(14,3))
