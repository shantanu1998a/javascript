/* Let’s look at more examples of passing functions as values and using function expressions.

We’ll write a function ask(question, yes, no) with three parameters: */

/* question: Text of the question */

/* yes: Function to run if the answer is “Yes” */

/* no: Function to run if the answer is “No” */

/* The function should ask the question and, depending on the user’s answer, call yes() or no(): */

function ask(question, yes, no) {
    if (confirm(question)) {
        yes();    
    } 
    else {
        no();
    }
}

function showOk() {
    alert( "You agreed." );
}

function showCancel() {
    alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


/* In practice, such functions are quite useful. 
The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. 
In the browser, such function usually draws a nice-looking question window. But that’s another story. */

/* The arguments showOk and showCancel of ask are called callback functions or just callbacks. */