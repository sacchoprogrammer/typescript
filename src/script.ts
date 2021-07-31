let myFuction: Function;

myFuction = () => {
console.log("Hello");
};

// In function a b c paremeter c default value set 
const myFun = (a:string, b:string, c: string = 'Default Test') => {
console.log(c);
console.log(`Hello ${a} ${b}`)
}

myFun("A", "B", "C");