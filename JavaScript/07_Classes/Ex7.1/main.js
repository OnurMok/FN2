
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

class PersonMethods {
    constructor (fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greet() {
        console.log("Hi there! I am " + this.firstname);
    }

    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
        }
}

let ana = new PersonMethods("Ana", "Cvetkova");
let nate = new PersonMethods("Nate", "Stamenkova");
ana.greet();
nate.greet();

let anaCompliment = ana.compliment(nate.firstname, "dress");
console.log(anaCompliment);