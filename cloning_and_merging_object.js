/* So, copying an object variable creates one more reference to the same object.

But what if we need to duplicate an object? Create an independent copy, a clone?

That’s also doable, but a little bit more difficult, because there’s no built-in method for that in JavaScript. Actually, that’s rarely needed. 
Copying by reference is good most of the time.

But if we really want that, 
then we need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level.

Like this: */

let user = {
    "name": "Rohan",
    "age": 10
};

let clone = {}; // The new empty Object

// lt's copy all the user properties into clone object

for (const key in user) {
    clone[key] = user[key]
    console.log(key);
}

// now clone is a fully independent object with the same content

clone.name = "Ritam" // change the data in it

console.log(user.name); // still Rohan in the original object