
class Person {
    constructor (fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
}

let D = new Person ("Orhan", "Pamuk");
let K = new Person ("Hasan", "Huseyin");

console.log("Hello ", D.firstname, D.lastname);
console.log(K);

function sayHI(person) {
    console.log("Hi" + " " + person.firstname + " " + person.lastname);
    
}

sayHI(D);
sayHI(K);