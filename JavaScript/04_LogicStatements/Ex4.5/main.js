alert("Ex4.5");

let userInput = prompt("Enter a number btw 0 and 10");
let selectedNumber = Number(userInput);

let message = "My selection: ";

switch (selectedNumber) {
    case 0:
        message += "Bear";
        break;
    case 1:
        message += "Bunny";
        break;
    case 2:
    case 3:
        message += "Girafe";
        break;
    case 4:
        message += "Horse";
        break;
    case 5:
    case 10:
    case 7:
        message += "Bird";
        break;
    case 8:
    case 6:
        message += "Fish";
        break;
    case 9:
        message += "Turtle";
        break;                
    default:
        message = "Invalid input";
        break;
}
console.log(message);

