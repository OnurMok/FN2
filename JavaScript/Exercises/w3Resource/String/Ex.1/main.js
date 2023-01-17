/*
5. Write a JavaScript function to convert a string in abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/

let ime = "Robin Singh";
let splitName = ime.split(" ");
console.log(splitName[0] + " " + splitName[1][0] + ".");


function abbrev_name(fullName) {
    let abbrevName = "";

    let splitName = fullName.split(" ");
    abbrevName = splitName[0] + " " + splitName[1][0] + ".";


    return abbrevName;
}

console.log(abbrev_name("Onur Mehmed"));
console.log(abbrev_name("Mustafa Kemal"));