alert("Ex6.2");

let descriptiveWord = ["Strong", "Smart", "Fast", "Beautiful"];

function askName() {

    let input = prompt("what is your name?")
    
    let randomNumber = Math.floor(Math.random() * descriptiveWord.length);

    console.log(input + " is " + descriptiveWord[randomNumber]);
}
askName();