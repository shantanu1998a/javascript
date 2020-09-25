// Empty object syntax

let user = new Object();


// OR 
let user1 = {
    name: "Shantanu",
    age: 23,
    like_me:"Piku"
};

user.isAdmin = true;

console.log(user);

delete user.isAdmin;

console.log("After delete ",user);

console.log(user1);

console.log(user1.like_me);