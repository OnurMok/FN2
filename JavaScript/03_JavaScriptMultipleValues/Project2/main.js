alert("Project2");

let inventory = [];

let phone = {
    name: "samsung phone",
    model: "Note22",
    cost: 900.0,
    quantity: 10
}

let watch = {
    name: "samsung watch",
    model: "galaxy",
    cost: 390.0,
    quantity: 5
}

let bugs = {
    name: "samsung bugs",
    model: "Pro2",
    cost: 200.0,
    quantity: 20
}

inventory.push(phone, watch, bugs);
console.log(inventory);

console.log(inventory[2]); 

