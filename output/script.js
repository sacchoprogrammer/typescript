"use strict";
var myFuction;
myFuction = function () {
    console.log("Hello");
};
// In function a b c paremeter c default value set 
var myFun = function (a, b, c) {
    if (c === void 0) { c = 'Default Test'; }
    console.log(c);
    console.log("Hello " + a + " " + b);
};
myFun("A", "B", "C");
