/* Arrow functions can be used in the same way as Function Expressions.

For instance, to dynamically create a function:

*/

let age = prompt("What is your age..?", 18);

let welcome = (age < 18) ? () => { alert('hello'); } : () => { alert("Greetings!"); };

welcome();