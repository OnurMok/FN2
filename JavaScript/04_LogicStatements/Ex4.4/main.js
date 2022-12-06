alert("Ex4.4");

let randomNumber = Math.random();

randomNumber = randomNumber * 6;

randomNumber = Math.floor(randomNumber);

console.log(randomNumber);

let userInput = prompt("Ask your question");
let answer = "";

switch (randomNumber) {
        case 0:
        answer = "Yes";
    break;
        case 1:
        answer = "No";
    break;
        case 2:
        answer = "Maybe";
    break;
        case 3:
        answer = "Why not!";
    break;
        case 4:
        answer = "Yes for sure!";
    break;
        case 5:
        answer = "Best one!";
    break;
} 
console.log(userInput);
console.log(answer);