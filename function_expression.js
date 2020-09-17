/* We cane copy a function in a variable. In javascript function is a special variable */

function fun() {
    alert("Hello from Javascript...!!!");
}

let fun2  = fun; // Copy the function in a variable.

fun(); // call fun Function
fun2(); // Call fun2 Function