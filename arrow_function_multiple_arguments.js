/* There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this: */

// let func = (arg1, arg2, ...argN) => expression

 let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

    let sum = function(a, b) {
        return a + b;
    };
*/

alert( sum(1, 2) ); // 3

/* As you can, see (a, b) => a + b means a function that accepts two arguments named a and b. 
Upon the execution, it evaluates the expression a + b and returns the result. */


