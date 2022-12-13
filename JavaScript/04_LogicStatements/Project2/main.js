// alert("Project2 in Lesson 4");

let choices = ["rock", "paper", "scissors"];

let computerChoise = Math.floor(Math.random() * 3);
let playerChoise = Math.floor(Math.random() * 3);

    console.log("computerChoise: " + computerChoise); 
    console.log("playerChoise: " + playerChoise); 

let showChoise = choices[computerChoise];
console.log ("computer choise: " + showChoise);

showChoise = choices[playerChoise];
console.log ("player choise: " + showChoise);

if (choices[computerChoise] === choices[playerChoise]) {
    console.log("It's a tie!!!")
} else if (choices[computerChoise] === "rock" && choices[playerChoise] === "paper"){
    console.log("Player wins!!!");
} else if (choices[computerChoise] === "paper" && choices[playerChoise] === "scissors"){
    console.log("Player wins!!!");
} else if (choices[computerChoise] === "scissors" && choices[playerChoise] === "rock"){
    console.log("Player wins!!!");
}  else if (choices[playerChoise] === "rock" && choices[computerChoise] === "paper"){
    console.log("Computer wins!!!");
} else if (choices[playerChoise] === "paper" && choices[computerChoise] === "scissors"){
    console.log("Computer wins!!!");
} else if (choices[playerChoise] === "scissors" && choices[computerChoise] === "rock"){
    console.log("Computer wins!!!");
} 