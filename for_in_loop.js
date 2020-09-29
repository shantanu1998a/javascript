/* For in loop */

let user = {
    "name": "Shantanu",
    "age": 22,
    "isadmin": true
};

for (const key in user) {
    if (user.hasOwnProperty(key)) {    // hasOwnProperty method is return a boolean value (true) if the property is exist in the object
        let element = user[key];
        console.log("'"+key+"'"+":"+element);
    }
}