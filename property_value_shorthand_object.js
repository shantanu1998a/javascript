 /* Property value shorthand
In real code we often use existing variables as values for property names.

For instance: */

function makeUser(name,age) {
    return {
        "name": name,
        "age": age
    }
}

let user = makeUser("Shantanu", 22);

console.log(user);