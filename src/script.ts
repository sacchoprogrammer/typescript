// Explicit variable declare for string
let a:string;
a = 'anything'

// Explicit variable declare for number
let b: number;
b = 1234

// null string and number array
let ab: (string | number)[] = [];
// value assign

ab.push("hello"); // string value assign
ab.push("Bangladesh"); // string value assign
ab.push(2021); // number value assign

console.log(ab); // print this Array

// person object with define schema
let person: {
 name: string
 age:number
 adult:true
}

console.log(person = { name:'shanto', age:26, adult:true});
let listOfNumber = ['1','2','3','4','5']
