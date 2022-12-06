alert("Ex4.2");

let userAge = prompt("what is your age?");
console.log(userAge);
console.log(typeof userAge);

userAge = Number(userAge);
console.log(typeof userAge);

let message = ""; 

if (userAge >= 21) {
    message = "Enter to the shop and you can buy achohol"
} else if (userAge >= 19) {
    message = "Enter to the shop but you can just ask a question about types of alcohol"
} else {
    message = "You can not enter to the shop!"
}

console.log(message);