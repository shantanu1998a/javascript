/* A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it. */


/* Here, the object is stored somewhere in memory. And the variable user has a “reference” to it.

When an object variable is copied – the reference is copied, the object is not duplicated.

For instance: */

let user = {
    "name":"Shantanu"
};

let admin = user; // copy the reference

/* Now we have two variables, each one with the reference to the same object: */

/* We can use any variable to access the object and modify its contents: */

admin.name = 'Piku'; // changed by the "admin" reference

console.log(user.name); // 'Piku', changes are seen from the "user" reference




/* The example above demonstrates that there is only one object. 

As if we had a cabinet with two keys and used one of them (admin) to get into it. 

Then, if we later use another key (user) we can see changes. */

