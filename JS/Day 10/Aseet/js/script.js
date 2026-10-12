// TASK 1  LET
let salary = 20000;
salary = 25000;
console.log(salary);

// TASK 2  CONST
const country = "India";
console.log(`My Country is ${country}`);

// TASK 3 TEMPLATE LITERAL
let name = "Arun";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// TASK 4 TEMPLATE LITERAL CALCULATION
let price = 500;
let quantity = 4;
let total = price * quantity;
console.log(`Total Price = ${total}`);

// TASK 5 DEFAULT PARAMETER
function greet(name = "Guest") {
  console.log(`Welcome ${name}`);
}
greet("Arun");
greet();

// TASK 6 ARRAY DESTRUCTURING
const colors = ["Red", "Green", "Blue"];
const [first, second, third] = colors;
console.log(first, second, third);

// TASK 7 OBJECT DESTRUCTURING
const student = { name: "Arun", age: 20, city: "Chennai" };
const { name: studentName, age: studentAge, city } = student;
console.log(studentName);
console.log(studentAge);
console.log(city);

// TASK 8 SPREAD
const numbers = [10, 20, 30];
const moreNumbers = [...numbers, 40, 50];
console.log(moreNumbers);

// TASK 9 REST
function showNumbers(...values) {
  console.log(values);
}
showNumbers(10, 20, 30, 40);

// TASK 10 ARROW FUNCTION
const add = (a, b) => a + b;
console.log(add(10, 20));