alert("If Statements");

// // 1.Check which number is bigger number

let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
if (a > b) {
  alert("The first number is bigger then the second number");
} else {
  alert("The second number is bigger then the first number");
}

// // 2. Check if a number is odd or even in JavaScript

let num1 = parseInt(prompt("Enter a number to check if odd or even number"));
if (num1 % 2 == 0) {
  alert(`The number ${num1} is Even number`);
} else {
  alert(`The number${num1} is odd number`);
}

// 3. Check if input variable is a number or not
let num=23;
//
if(isNaN(num)){
    console.log(`The ${num} is not a number`)
}else{
    console.log(`The ${num} is  a number`)
}

//4. Find the largest of two number and if are equal;

let a1 = parseInt(prompt("Enter the first number"));
let b1 = parseInt(prompt("Enter the second number"));

if (a1 > b1) {
  alert("The first number is bigger then the second number");
} else if (b1 > a1) {
  alert("The second number is bigger then the first number");
} else {
  alert(`The number ${a1} and the number ${b1} are equal`);
}

//5. Find the largest of three number;

let num11 = 10;
let num22 = 16;
let num33 = 24;

if (num11 > num22 && num11 > num33) {
  console.log(`${num11} is the largest number`);
} else if (num22 > num33) {
  console.log(`${num22} is the largest number`);
} else {
  console.log(`${num33} is the largest number`);
}

// 6. Check if a triangle is equilateral, scalene, or isosceles

let side1 = 8;
let side2 = 7;
let side3 = 5;

if (side1 == side2 && side1 == side3) {
  console.log(`Equilateral triangle.`);
} else if (side1 == side2 || side2 == side3 || side1 == side3) {
  console.log(`Isosceles triangle.`);
} else {
  console.log(`Scalene triangle.`);
}

//7.Find the a number is present in given range

num = 10;
start = 5;
end = 15;

if (num >= start && num <= end) {
  console.log(`${num} is between the range ${start} and ${end}`);
} else {
  console.log(`${num} is outside the range ${start} and ${end}`);
}

// 8.Perform arithmetic operations on two numbers

op = "add";
num111 = 5;
num222 = 8;

if (op == "add") {
  console.log(`Sum of ${num111} and ${num222} is ${num111 + num222}`);
} else if (op == "subtract") {
  console.log(`Difference of ${num111} and ${num222} is ${num111 - num222}`);
} else if (op == "multiply") {
  console.log(`Product of ${num111} and ${num222} is ${num111 * num222}`);
} else if (op == "divide") {
  console.log(`Division of ${num111} and ${num222} is ${num111 / num222}`);
} else if (op == "modulus") {
  console.log(`Modulus of ${num111} and ${num222} is ${num111 % num222}`);
} else {
  console.log(`${op} is an invalid operation`);
}

//9.Find the grade for input marks

let name = "John Doe";
marks = 91;
if (marks >= 90 && marks <= 100) {
  console.log(`${name} you have received S grade`);
} else if (marks >= 80 && marks < 90) {
  console.log(`${name} you have received A grade`);
} else if (marks >= 70 && marks < 80) {
  console.log(`${name} you have received B grade`);
} else if (marks >= 60 && marks < 70) {
  console.log(`${name} you have received C grade`);
} else if (marks >= 50 && marks < 60) {
  console.log(`${name} you have received D grade`);
} else if (marks >= 40 && marks < 50) {
  console.log(`${name} you have received E grade`);
} else if (marks >= 0 && marks < 40) {
  console.log(`${name} you have Failed`);
} else {
  console.log(`Invalid marks of ${marks}`);
}
