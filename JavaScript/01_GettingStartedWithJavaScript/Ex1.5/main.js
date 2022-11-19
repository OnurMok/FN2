alert("Start");
console.log("Onur Mok");

/* Poveke tekst poveke tekst 
poveke tekst
Poveke */

/*
let userName = prompt("Insert Your Name"); 
alert("Vaseto ime " + userName + " e procesirano!")
console.log(userName);
// So ovie linii na kod, zemame memorija, procesirame prostor vo memorija, se zacuvuva momentalno//
// Locirame ili dislocirame "key i value" - input (tekst, brojka, data) 
*/ 


let randomNum = Math.random() * 3;
console.log("My random number: " + randomNum);

let roundNum = Math.floor(randomNum) + 1;
console.log("My rounded number: " + roundNum);

let num = prompt("Guess a number from 1 to 3");

if (roundNum == num) {
    alert("You guessed right!");
} else {
    alert("You guessed wrong!");
}

