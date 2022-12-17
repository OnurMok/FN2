alert("Exercises from 17.12.2022")

// While-Loop
// - Write a JS code to print numbers from 1 to 10 in single line;

let arr = [];
for (let i = 0; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

// Write a JS code to find the number of digits in a number

let num = 54500088;
let count = 0;

while (num !=0) {
    num = Math.floor(num/10);
    
    count++;
}

num1 = 54500088;
console.log(`The number of digits of the number: ${num1} is ${count}`);

// Prints the Fibonacci series for the given range N using While loop.

let n1 = 0;
let n2 = 1;
let n3;
let fibnum = 8;
count = 2;

while (count <= fibnum) {
    n3 = n1 + n2;
    console.log(n3);

    n1 = n2;
    n2 = n3;
 
    count++;
}

// Print the odd number from 1 to 100 use array to store the numbers

let array1 = [];
let i =1;

while (i<100) {
    if (i % 2 !=0) array1.push(i)
    i++
}
console.log(array1);


// Do While Loop - Write a JS code to print numbers from given range by input

let input1 = parseInt(prompt("Enter a first number"));
let input2 = parseInt(prompt("Enter a second number"));

do {
    console.log(input1);
    input1++;
} while (input1 <= input2);


// // Guess a generated secret number between 1 and 10

let secretNumber = Math.floor(Math.random() * 10);
let guesses = 0; // for storing the number of guesses
let hint = ""; // for storing hint
let number = 0;

do {
  // get input from user
  let input = prompt("Please enter a number between 0 and 10");
  // get the integer
  number = parseInt(input);
  // increase the number of guesses
  guesses++;
  // check input number with the secret number provide hint if needed
  if (number > secretNumber) {
    alert("To high");
    alert(secretNumber);
  } else if (number < secretNumber) {
    alert("To low");
    alert(secretNumber);
  } else if (number == secretNumber) {
    alert(`Bravo! you're correct after ${guesses} guess(es).`);
  }
} while (number != secretNumber);

