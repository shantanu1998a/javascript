/* we can just write name, like this: */

function makeUser(name,age) {
    return {
        name,
        age
    }
}

let user = makeUser("Shantanu",20);

console.log(user);