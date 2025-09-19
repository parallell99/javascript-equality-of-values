// Exercise #1: Strict and Same
// Start commenting here
let number = Object.is(10, 20); //false
console.log(number)
let number1 = Object.is(0, -0); //false
console.log(number1)
let number2 = Object.is(NaN, 100); //false
console.log(number2)
let number3 = Object.is("one", "two"); //false
console.log(number3)
let number4 = Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //false
console.log(number4)
let number5 = Object.is(null, undefined); //false
console.log(number5)

let number6 = 10 === 20; //false
console.log(2,number6)
let number7 = 10 === "10" //false
console.log(2,number7)
let number8 = 3.14 !== 3.14; //false
console.log(2,number8)
let number9 = "TechUp" !== "TechUp"; //false   
console.log(number9)
let number10 = NaN === NaN; //false
console.log(number10)
0 !== -0; //false

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
let iii = objectA === objectB; //false
console.log(iii)
