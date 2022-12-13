alert("Project 1 from Lesson 4");

// let randomNumber = 0;
// console.log("First assigment " + randomNumber);

let randomNumber = Math.floor(Math.random() * 11);
console.log("Second assigment " + randomNumber);

//randomNumber = randomNumber * 11;
// randomNumber *= 11;
// console.log("Third assigment " + randomNumber);

// randomNumber = Math.floor(randomNumber);
// console.log("Fourt assigment " + randomNumber);

let userInput = parseInt(prompt("Enter a number btw 0 and 10"));
console.log("User input " + userInput + " type of: " + typeof userInput);

// let userNumber = Number(userInput);
// console.log("User number " + userNumber + " type of: " + typeof userNumber);

// let userNumber2 = parseInt(userInput);
// console.log("User  number2 " + userNumber2 + " type of: " + typeof userNumber2);

if (userInput > randomNumber) {
    console.log("Your number is greater than the random number");
} else if (userInput < randomNumber) {
    console.log("Your number is smaller than the random number");
} else  {
    console.log("Your quessed the number!!!");
}

let messege = 
userInput > randomNumber ? 
"Your number is greater then the random number" : userInput < randomNumber ? 
"Your number is smaller then the random number" : "Your guessed the number!!!";
console.log(messege);