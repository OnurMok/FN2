alert("Exercise 3.5");

let people = {
    friends:[],
};

let Ana = {
    firstname: "Ana",
    lastname: "Acevska",
    id: "1",
}

let Gjorgi = {
    firstname: "Gjorgi",
    lastname: "Sirakoski",
    id: "2",
}

let Dzeno = {
    firstname: "Dzeno",
    lastname: "Redzovic",
    id: "3"
}

people.friends.push(Ana, Gjorgi, Dzeno);
console.log(people);