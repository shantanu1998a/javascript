/* Another special feature of Function Declarations is their block scope.

In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. 
And then we plan to use it some time later.

If we use Function Declaration, it won’t work as intended: */

// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } 
// else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }

// // ...use it later
// alert(welcome()); // Error: welcome is not defined


/* What can we do to make welcome visible outside of if?

The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

This code works as intended: */

let age = prompt("What is your age..??", 18);

let welcome;

if (age < 18) {
    welcome = function() {
        alert("Hello");
    }; 
} 
else {
    welcome = function() {
        alert("Greetings!");
    };
}

alert(welcome()); // It's ok now