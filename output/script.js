"use strict";
// userDetials function 
var userDetials = function (id, name) {
    console.log("user id is " + id + ", name is " + name);
};
// sayHello function
var sayHello = function (user) {
    console.log("Hello " + (user.age > 50 ? "Sir" : "Mr.") + " " + user.name);
};
// print Hello Mr. shanto
console.log(sayHello({ name: 'shanto', age: 26 }));
