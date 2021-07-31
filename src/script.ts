type stringOrNumber = string | number
type userType = {name:string, age:number}

// userDetials function 
const userDetials = (id:stringOrNumber, name:string) =>{
    console.log(`user id is ${id}, name is ${name}`)
}

// sayHello function
const sayHello = (user:userType) =>{
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
}

// print Hello Mr. shanto

console.log(sayHello({name: 'shanto', age: 26}));


