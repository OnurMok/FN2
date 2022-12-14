alert("switch case");

// /1. Using JavaScript switch statement to get the day of the week

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); // Tuesday

//2.Using the JavaScript switch statement to get the day count based of a month
let year = 2023;
let month = 2;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1; // invalid month
}
console.log(dayCount);

//3.Simple Calculator

let result;
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    default:
        console.log('Invalid operator');
        break;
}

//4.Write a JavaScript program- Switch statement for greater-than/less-than;

let num1 = 5;
switch (true) {
    case (num1 < 5):
        console.log("Number is very low");
        break;
    case (num1 < 10):
        console.log("Number is low");
        break;
    case (num1 > 100):
        console.log("Number is high");
        break;
    default:
        console.log("Number is medium")
}

//5.Write a JavaScript program- Switch statement for greater-than/less-than using multiple case

let num5 = 100;
switch (num5) {
  case 0:
  case 5:
  case 6:
    console.log("Number is low");
    break;
  case 100:
    console.log("Number is high");
    break;
  default:
    console.log("I don't know the number");
}

// 6.   Create a random number in range from 1-10 and give a output with message the number using switch statement;

let randomnumber = Math.floor(Math.random() * 10) + 1;
console.log(randomnumber);

switch (randomnumber) {
  case 1:
    console.log("The random number is: 1");
    break;
  case 2:
    console.log("The random number is: 2");
    break;
  case 3:
    console.log("The random number is: 3");
    break;
  case 4:
    console.log("The random number is: 4");
    break;
  case 5:
    console.log("The random number is: 5");
    break;
  case 6:
    console.log("The random number is: 6");
    break;
  case 7:
    console.log("The random number is: 7");
    break;
  case 8:
    console.log("The random number is: 8");
    break;
  case 9:
    console.log("The random number is: 9");
    break;
  default:
    console.log("The random number is out of range");
}