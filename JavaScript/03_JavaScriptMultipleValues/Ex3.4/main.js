alert("Exercise 3.4");

let myCar = {
    brand: "Audi",
    model: "A7",
    color: "Blue",
    engine: 3.0,
    new: true, 
}; 
console.log("MyCar color: ", myCar.color);

let color = "color"; 
console.log(color);

let prop = color; 
console.log(prop);

myCar[prop] = "red";
console.log("MyCar new color: ", myCar.color);

prop = "forSale";
myCar[prop] = true;

console.log(`Car ${myCar.brand} ${myCar.model} ${myCar.engine} `);
console.log("For Sale: ", myCar.forSale ? "Yes" : "No");


